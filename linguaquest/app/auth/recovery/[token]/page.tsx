"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/components/forms/form";
import { ControlledInput } from "@/components/inputs/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";

import { useMutation } from "@/lib/rest-query/use-mutation";
import { AuthScheme } from "@/constant";
import { recovery } from "../../api";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

interface RecoveryPageProps {
  params: {
    token: string;
  };
}

const RecoveryPage: React.FC<RecoveryPageProps> = ({ params }) => {
  const router = useRouter();
  const { token } = params;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(AuthScheme.RecoveryPasswordScheme),
  });
  const $recoveryPassword = useMutation(recovery);
  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4 w-full max-w-[450px]">
      <Form
        onSubmit={handleSubmit((form) =>
          $recoveryPassword.mutate(
            { ...form, token },
            {
              onSuccess: () => {
                router.push("/", { scroll: false });
              },

              onError: ({ message }) => {
                router.push("forgot-password", { scroll: false });
                enqueueSnackbar(message, { variant: "error" });
              },
            }
          )
        )}
        isLoading={$recoveryPassword.isLoading}
        submitButtonLabel="Reset Password"
        btnStyle="w-fit p-2"
        form={
          <div className="flex flex-col gap-4">
            <ControlledInput
              control={control}
              name="password"
              errors={errors.password}
              inputProps={{ type: "password" }}
              label="New Password"
            />
            <ControlledInput
              control={control}
              name="passwordConfirm"
              errors={errors.passwordConfirm}
              inputProps={{ type: "password" }}
              label="Confirm Password"
            />
          </div>
        }
      />
    </div>
  );
};

export default RecoveryPage;
