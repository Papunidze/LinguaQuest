import * as t from "io-ts";

export const TAuth = t.type({
  accessToken: t.string,
  refreshToken: t.string,
  status: t.string,
});

export const TRefreshToken = t.type({
  accessToken: t.string,
  refreshToken: t.string,
});

export const TRecovery = t.type({
  status: t.string,
  message: t.string,
});

export const TResetPassword = t.type({
  message: t.string,
});

export type AuthInput = {
  email: string;
  password: string;
};

export type SignUpInput = {
  email: string;
  password: string;
  name: string;
  passwordConfirm: string;
};

export type RecoveryInputs = {
  password: string;
  token: string;
};

export type ResetPasswordInputs = {
  email: string;
};
