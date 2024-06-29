import Button from "@/ui/button";
import Divider from "@/ui/divider";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LogIn, User } from "react-feather";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>LinguaQuest - Language Learning Platform</title>
        <meta
          name="description"
          content="Join LinguaQuest to enhance your language learning experience. Log in or create an account to get started."
        />
        <meta
          name="keywords"
          content="language learning, LinguaQuest, log in, create account"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="h-full w-full flex items-center justify-center  ">
        <div className="bg-white flex w-full p-4 h-full container rounded-3xl shadow-lg gap-4">
          <aside className="flex-1 flex items-center justify-start w-full flex-col relative">
            <header className="flex items-start justify-between w-full flex-col divide-y p-4">
              <h1 className="md:text-2xl text-xl  font-bold bg-gradient-1 text-transparent bg-clip-text">
                LinguaQuest
              </h1>
            </header>
            <Divider />
            <nav className="flex items-center justify-center gap-4">
              <Link href={"/auth/login"}>
                <Button
                  variant="secondary"
                  className="relative z-50 group-hover:scale-95"
                  icon={<LogIn />}
                >
                  Log In
                </Button>
              </Link>
              <Link href={"/auth/register"}>
                <Button
                  className="relative z-50 !bg-gray-100 group-hover:scale-95"
                  color="!text-primary-dark"
                  icon={<User />}
                >
                  Create Account
                </Button>
              </Link>
            </nav>
            <div className="max-w-md w-full">
              <section className="flex items-start justify-center w-full flex-col">
                {children}
              </section>

              <div className="flex items-center gap-2 w-full">
                <span className="w-full max-w-36 text-sm text-gray-400">
                  Or Continue with
                </span>
                <Divider />
              </div>

              <Button
                variant="outlined"
                className="mt-4"
                image={
                  <Image
                    src="/images/google.png"
                    alt="Company Logo"
                    className="object-contain rounded-2xl shadow-inner button-icon-span"
                    width={96}
                    height={96}
                  />
                }
              >
                Google
              </Button>
            </div>
          </aside>
          <aside className="flex-1 md:block hidden rounded-3xl shadow-md ">
            <Image
              src="/images/banner.svg"
              alt="Company Logo"
              className="object-cover rounded-2xl  w-full h-full shadow-inner"
              width={500}
              height={500}
            />
          </aside>
        </div>
      </main>
    </>
  );
}
