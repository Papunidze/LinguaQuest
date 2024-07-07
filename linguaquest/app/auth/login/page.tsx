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
import { useMutation } from "@/lib/rest-query/use-mutation";
import { auth } from "../api";
import { buildRequestUrl } from "@/lib/request/use-request-url";
import { useAuthContext } from "@/providers/loginProvider";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(AuthScheme.signInSchema),
  });
  const { setAuthData } = useAuthContext();

  const $auth = useMutation(auth);

  return (
    <div className="leading-7 mb-2 flex flex-col gap-4 mt-4 w-full  m-auto">
      <div className="flex items-center justify-center gap-2">
        <h1 className="md:text-2xl text-xl  font-bold ">Sign in to</h1>
        <h1 className="md:text-2xl text-xl  font-bold bg-gradient-1 text-transparent bg-clip-text">
          LinguaQuest
        </h1>
      </div>
      <Form
        onSubmit={handleSubmit((form) =>
          $auth.mutate(
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
        submitButtonLabel="Sign In"
        isLoading={false}
        form={
          <div className="relative flex flex-col gap-4">
            <ControlledInput
              control={control}
              errors={errors.email}
              name="email"
              inputProps={{ type: "text" }}
              label="Email"
            />
            <div className="relative">
              <Link
                className=" float-right font-semibold font-montserrat  right-1 absolute text-end top-2 text-primary-light underline cursor-pointer md:top-3  text-xs"
                href={"/auth/forgot-password"}
              >
                Forgot Password?
              </Link>
              <ControlledInput
                control={control}
                errors={errors.password}
                name="password"
                label="Password"
                inputProps={{ type: "password" }}
              />
            </div>
          </div>
        }
      />
      <p className="my-2 flex justify-center gap-1 font-montserrat items-center  md:text-base text-sm">
        Don&apos;t have an account?
        <Link
          className="underline  cursor-pointer float-right font-semibold font-montserrat text-primary-light"
          href={"/auth/register"}
        >
          Sign up
        </Link>
      </p>
      <div className="flex items-center gap-2 w-full">
        <span className="w-full max-w-36 text-sm text-gray-400">
          Or Continue with
        </span>
        <Divider />
      </div>

      <Button
        variant="outlined"
        onClick={() =>
          (window.location.href = `${buildRequestUrl("/auth/google")}`)
        }
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
  );
};

export default Login;
