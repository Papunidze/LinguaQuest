import { rest } from "@/lib/request";
import * as Codec from "./codec";

export const passwordReset = ({ email }: Codec.ResetPasswordInputs) =>
  rest.post("/auth/forgot-password", { email }).decode(Codec.TResetPassword);

export const recovery = ({ password, token }: Codec.RecoveryInputs) =>
  rest
    .post("/auth/recovery-forgot-password", { password, token })
    .decode(Codec.TRecovery);

export const register = ({
  email,
  password,
  name,
  passwordConfirm,
}: Codec.SignUpInput) =>
  rest
    .post("/auth/signup", { email, password, name, passwordConfirm })
    .decode(Codec.TAuth);

export const auth = ({ email, password }: Codec.AuthInput) =>
  rest.post("/auth/sign", { email, password }).decode(Codec.TAuth);

export const refresh = () =>
  rest.post("/auth/refresh").decode(Codec.TRefreshToken);
