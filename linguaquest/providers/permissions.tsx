"use client";

import { AuthType, useAuthContext } from "./loginProvider";

export default function Permissions({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = useAuthContext();

  if (auth.type === AuthType.NULL) {
    return <div>Loading...</div>;
  }

  return children;
}
