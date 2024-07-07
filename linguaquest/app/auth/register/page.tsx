"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/components/forms/form";
import { ControlledInput } from "@/components/inputs/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Divider from "@/ui/divider";
import Button from "@/ui/button";
import Image from "next/image";
import { AuthScheme } from "@/constant";
import { useAuthContext } from "@/providers/loginProvider";
import { register } from "../api";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: "", password: "", passwordConfirm: "", name: "" },
    resolver: yupResolver(AuthScheme.signUpScheme),
  });
  const { setAuthData } = useAuthContext();
  const $register = useMutation(register);

  return (
    <div className="leading-7 mb-2 flex flex-col gap-4 mt-4 w-full  m-auto">
      <div className="flex items-center justify-center gap-2">
        <h1 className="md:text-2xl text-xl  font-bold ">Sign up to</h1>
        <h1 className="md:text-2xl text-xl  font-bold bg-gradient-1 text-transparent bg-clip-text">
          LinguaQuest
        </h1>
      </div>

      <Form
        onSubmit={handleSubmit((form) =>
          $register.mutate(
            { ...form },
            {
              onSuccess: ({ ...args }) => {
                setAuthData({ ...args });
                router.push("/", { scroll: false });
              },
              onError: ({ message }) => {
                enqueueSnackbar(message, { variant: "error" });
              },
            }
          )
        )}
        submitButtonLabel="Sign Up"
        isLoading={false}
        form={
          <div className="relative flex flex-col gap-2">
            <ControlledInput
              control={control}
              name="name"
              inputProps={{ type: "text" }}
              label="Name"
              errors={errors.name}
            />
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
              errors={errors.email}
            />
            <ControlledInput
              control={control}
              name="password"
              label="Password"
              inputProps={{ type: "password" }}
              errors={errors.password}
            />
            <ControlledInput
              control={control}
              name="passwordConfirm"
              label="Confirm Password"
              inputProps={{ type: "password" }}
              errors={errors.passwordConfirm}
            />
          </div>
        }
      />
      <p className="my-2 flex justify-center gap-1 font-montserrat items-center  md:text-base text-sm">
        Already have an account?
        <Link
          className="underline  cursor-pointer float-right font-semibold font-montserrat text-primary-light "
          href={"/auth/login"}
        >
          Sign in
        </Link>
      </p>
      <div>
        <div className="flex items-center gap-2 w-full">
          <span className="w-full max-w-36 text-sm text-gray-400">
            Or Continue with
          </span>
          <Divider />
        </div>

        <Button
          variant="outlined"
          image={
            <Image
              src="/images/google.png"
              alt="Company Logo"
              className="object-contain rounded-2xl shadow-inner button-icon-span"
              width={96}
              height={96}
            />
          }
        >
          Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
