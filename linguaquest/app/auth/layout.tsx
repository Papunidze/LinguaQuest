import Button from "@/ui/button";
import Divider from "@/ui/divider";
import IconButton from "@/ui/icon-button";

import {
  ArrowLeftEndOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Head from "next/head";
import Image from "next/image";

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
              <div className="relative cursor-pointer group">
                <Button
                  variant="secondary"
                  className="relative z-50 group-hover:scale-95"
                  icon={ArrowLeftEndOnRectangleIcon}
                >
                  Log In
                </Button>
                <div className="absolute w-4 h-4 bg-button-secondary rotate-45 z-10 -translate-x-1/2 top-[calc(100%-8px)] left-1/2 group-hover:scale-90 group-hover:top-[calc(100%-10px)] transition-all"></div>
              </div>
              <div className="relative cursor-pointer group">
                <Button
                  className="relative z-50 !bg-gray-100 group-hover:scale-95"
                  color="!text-primary-dark"
                  icon={UserCircleIcon}
                >
                  Create Account
                </Button>
                <div className="absolute w-4 h-4 bg-gray-200 rotate-45 z-10 -translate-x-1/2 bottom-auto left-1/2 right-auto top-[calc(100%-8px)] group-hover:top-[calc(100%-10px)] transition-all"></div>
              </div>
            </nav>
            <section className="flex items-start justify-center w-full flex-col">
              {children}
            </section>
            <Divider />
            <div className="flex items-center gap-2 justify-center">
              <IconButton>
                <Image
                  src={"/images/facebook.png"}
                  alt="Company Logo"
                  className="object-contain rounded-2xl  w-8 h-8 shadow-inner"
                  width={500}
                  height={500}
                />
              </IconButton>
              <IconButton>
                <Image
                  src={"/images/google.png"}
                  alt="Company Logo"
                  className="object-contain rounded-2xl  w-8 h-8 shadow-inner"
                  width={96}
                  height={96}
                />
              </IconButton>
              <IconButton>
                <Image
                  src={"/images/instagram.png"}
                  alt="Company Logo"
                  className="object-contain rounded-2xl  w-8 h-8 shadow-inner"
                  width={500}
                  height={500}
                />
              </IconButton>
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
