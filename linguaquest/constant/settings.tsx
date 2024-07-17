import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "errors.min_3")
    .max(50)
    .matches(/^[A-Za-z\s]+$/, "errors.only_alpabets")
    .required("errors.requires"),
  username: yup
    .string()
    .min(3, "errors.min_3")
    .max(20)
    .test(
      "no-whitespace",
      "errors.no_whitespace",
      (value: string | undefined) => !/\s/.test(value || "")
    )
    .required("errors.requires"),
});
