"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/components/forms/form";
import { ControlledInput } from "@/components/inputs/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/constant/authorization";
import Link from "next/link";

const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(signInSchema),
  });

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4">
      <h1>Forgot Password?</h1>

      <p className="text-xs text-gray-500 font-medium text-justify ">
        Enter the email address you used when you joined, and we’ll send you
        instructions to reset your password.
      </p>
      <p className="text-xs text-gray-500 font-medium text-justify ">
        For security reasons, we do NOT store your password. So rest assured
        that we will never send your password via email.
      </p>
      <Form
        onSubmit={handleSubmit((form) => console.log("form"))}
        isLoading={false}
        submitButtonLabel="Send Reset Instructions"
        form={
          <div className="relative flex flex-col gap-4">
            <ControlledInput
              control={control}
              name="email"
              errors={errors.email}
              inputProps={{ type: "text" }}
              label="Email Address"
            />

            <Link
              className=" float-right font-semibold font-montserrat  right-1 absolute text-end top-2 text-primary-light underline cursor-pointer md:top-3  text-xs"
              href={"/auth/login"}
            >
              Sign in
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default ForgotPassword;
