"use client";

import { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { CheckLoginProvider } from "./loginProvider";
import { SnackbarProvider } from "notistack";
import Permissions from "./permissions";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckLoginProvider>
        <SnackbarProvider autoHideDuration={5000}>
          <Permissions>
            <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
          </Permissions>
        </SnackbarProvider>
      </CheckLoginProvider>
    </QueryClientProvider>
  );
};

export default Provider;
