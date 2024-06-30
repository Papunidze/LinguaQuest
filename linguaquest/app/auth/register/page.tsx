"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/components/forms/form";
import { ControlledInput } from "@/components/inputs/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/constant/authorization";

const Register = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(signInSchema),
  });

  return (
    <div className="leading-7 mb-2 flex flex-col gap-4 mt-4 w-full  m-auto">
      <Form
        onSubmit={handleSubmit((form) => console.log(form))}
        submitButtonLabel="Sign Up"
        isLoading={false}
        form={
          <div className="relative flex flex-col gap-2">
            <ControlledInput
              control={control}
              name="name"
              inputProps={{ type: "text" }}
              label="Name"
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
            />
          </div>
        }
      />
    </div>
  );
};

export default Register;
