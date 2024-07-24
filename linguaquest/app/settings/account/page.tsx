"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/components/forms/form";
import { ControlledInput } from "@/components/inputs/controlled-input";
import { settingsScheme } from "@/constant";
import { useAuthContext } from "@/providers/loginProvider";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import IconButton from "@/ui/icon-button";
import { Edit2 } from "react-feather";

const Account = () => {
  const { auth } = useAuthContext();
  const [avatar, setAvatar] = useState(auth.user?.avatar);
  const [isEdit, setIsEdit] = useState(false);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;

        setAvatar(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: auth.user?.name || "",
      username: auth.user?.email || "",
    },
    resolver: yupResolver(settingsScheme.schema),
  });
  return (
    <div className="min-h-full bg-gray-100">
      <Head>
        <title>Account Settings</title>
      </Head>
      <main className="mx-auto w-full p-6 bg-white shadow-md rounded-lg ">
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h2 className="text-xl font-semibold mb-2">Account Information</h2>
          <div className="flex flex-col items-center gap-2 rounded-full bg-black w-24 h-24 ml-2">
            <Image
              src={avatar || ""}
              alt=""
              width={500}
              height={500}
              className="object-contain w-full h-full rounded-full"
            />

            <IconButton
              icon={<Edit2 width={16} />}
              className="bg-transparent flex gap-1 text-gray-500 hover:text-gray-800 items-center text-center justify-center"
            >
              <span className="text-sm">Edit</span>
            </IconButton>
          </div>
          {isEdit ? (
            <div className="mt-4 border-[1px] border-gray-200 rounded-xl p-4 w-full ">
              <Form
                onSubmit={handleSubmit(
                  (form) => console.log(form)
                  // $updateUser.mutate(
                  //   { ...form, avatar },
                  //   {
                  //     onSuccess: () => {
                  //       showSnackbar(
                  //         "Your data has been updated successfully",
                  //         "success"
                  //       );
                  //     },
                  //     onError: (error) => {
                  //       const customError = error as { errorKey: string };
                  //       showSnackbar(
                  //         errorsResponse[customError.errorKey],
                  //         "error"
                  //       );
                  //     },
                  //   }
                  // )
                )}
                // isLoading={$updateUser.isLoading}
                submitButtonLabel="Save"
                btnStyle="w-fit px-5 "
                form={
                  <div className="grid grid-cols-1 relative md:grid-cols-3 gap-4">
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
                      errors={errors.name}
                    />
                    <IconButton
                      icon={<Edit2 width={16} />}
                      onClick={() => setIsEdit((prev) => !prev)}
                      className="bg-transparent flex gap-1 text-gray-500 hover:text-gray-800 items-center text-center justify-center  w-fit justify-self-end border-[1px] border-gray-200 rounded-xl p-2 h-fit"
                    >
                      <span className="text-sm">Edit</span>
                    </IconButton>
                  </div>
                }
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 mt-4 border-[1px] border-gray-200 rounded-xl p-4 w-full relative md:grid-cols-3">
              <div className="grid grid-cols-1 ">
                <span className="text-gray-400 text-sm">Name</span>
                <span className="text-base font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                  {auth.user?.name}
                </span>
              </div>
              <div className="grid grid-cols-1 ">
                <span className="text-gray-400 text-sm">Email</span>
                <span className="text-base font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                  {auth.user?.email}
                </span>
              </div>
              <IconButton
                icon={<Edit2 width={16} />}
                onClick={() => setIsEdit((prev) => !prev)}
                className="bg-transparent flex gap-1 text-gray-500 hover:text-gray-800 items-center text-center justify-center  w-fit justify-self-end border-[1px] border-gray-200 rounded-xl p-2"
              >
                <span className="text-sm">Edit</span>
              </IconButton>
            </div>
          )}

          <div className="w-full border-[1px] border-gray-200 rounded-xl">
            <Form
              onSubmit={handleSubmit(
                (form) => console.log(form)
                // $updateUser.mutate(
                //   { ...form, avatar },
                //   {
                //     onSuccess: () => {
                //       showSnackbar(
                //         "Your data has been updated successfully",
                //         "success"
                //       );
                //     },
                //     onError: (error) => {
                //       const customError = error as { errorKey: string };
                //       showSnackbar(
                //         errorsResponse[customError.errorKey],
                //         "error"
                //       );
                //     },
                //   }
                // )
              )}
              // isLoading={$updateUser.isLoading}
              submitButtonLabel="Save"
              btnStyle="w-fit px-5 !mb-2 ml-4"
              form={
                <div className="grid grid-cols-1 mt-4  p-4 w-full relative md:grid-cols-3 gap-4">
                  <ControlledInput
                    control={control}
                    name="oldPassword"
                    inputProps={{ type: "text" }}
                    label="Old Password"
                    errors={errors.name}
                  />
                  <ControlledInput
                    control={control}
                    name="newPassword"
                    label="New Password"
                    inputProps={{ type: "text" }}
                    errors={errors.username}
                  />
                  <ControlledInput
                    control={control}
                    name="confirmPassword"
                    label="Confirm Password"
                    inputProps={{ type: "text" }}
                    errors={errors.username}
                  />
                </div>
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Account;
/*
          <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
            <div className="flex flex-row items-center justify-start w-full gap-3">
              <div className="flex items-center justify-start w-64">
                <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center p-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                  </div>
                  <Image
                    src={avatar || ""}
                    alt=""
                    width={500}
                    height={500}
                    className="object-contain w-full h-44  absolute opacity-50"
                  />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
          </div>
          <Form
            onSubmit={handleSubmit(
              (form) => console.log(form)
              // $updateUser.mutate(
              //   { ...form, avatar },
              //   {
              //     onSuccess: () => {
              //       showSnackbar(
              //         "Your data has been updated successfully",
              //         "success"
              //       );
              //     },
              //     onError: (error) => {
              //       const customError = error as { errorKey: string };
              //       showSnackbar(
              //         errorsResponse[customError.errorKey],
              //         "error"
              //       );
              //     },
              //   }
              // )
            )}
            // isLoading={$updateUser.isLoading}
            submitButtonLabel="Save"
            btnStyle="w-fit  px-5"
            form={
              <>
                <ControlledInput
                  control={control}
                  name="name"
                  inputProps={{ type: "text" }}
                  label="Name"
                  errors={errors.name}
                />
                <ControlledInput
                  control={control}
                  name="username"
                  label="Username"
                  inputProps={{ type: "text" }}
                  errors={errors.username}
                />
              </>
            }
          />
*/
