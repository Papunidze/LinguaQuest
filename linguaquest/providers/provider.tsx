"use client";

import { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { CheckLoginProvider } from "./loginProvider";
import { SnackbarProvider } from "notistack";

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
          <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
        </SnackbarProvider>
      </CheckLoginProvider>
    </QueryClientProvider>
  );
};

export default Provider;
