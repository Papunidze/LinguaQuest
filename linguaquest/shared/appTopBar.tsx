"use client";
import { AuthType, useAuthContext } from "@/providers/loginProvider";
import Button from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useCallback, FC } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Poppins from "@/ui/poppins";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { SignOut } from "@/app/auth/api";
import { MenuToggle } from "@/components/menu/menuToggle";

interface NavigationItem {
  id: string;
  title: string;
  url: string;
}

const navigation: NavigationItem[] = [
  { id: "0", title: "Home", url: "/features" },
  { id: "1", title: "List", url: "#pricing" },
  { id: "2", title: "Contacts", url: "#how-to-use" },
  { id: "3", title: "About", url: "#roadmap" },
];

const AppTopBar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useAuthContext();

  const toggleNavigation = useCallback(() => {
    setIsOpen((prevOpen) => {
      const newOpen = !prevOpen;
      if (newOpen) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
      return newOpen;
    });
  }, []);

  const $signOut = useMutation(SignOut);

  return (
    <nav className="z-50 shadow-sm fixed top-0 w-full left-0 rounded-lg py-2 bg-white/75 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center z-50 gap-4">
            <div className="-mr-2 flex md:hidden z-50">
              <MenuToggle setIsOpen={toggleNavigation} isOpen={isOpen} />
            </div>
            <Link href="/">
              <h1 className="leading-10 font-Poppins text-xl font-semibold bg-gradient-1 text-transparent bg-clip-text relative px-4">
                LinguaQuest
                <span
                  className="absolute w-full left-0 h-full bg-transparent border-[1px] border-red-200 rounded-full rotate-[5deg]"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute w-full left-0 h-full bg-transparent border-[1px] border-red-200 rounded-full rotate-[10deg]"
                  aria-hidden="true"
                ></span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex items-center justify-center"
                >
                  <Link
                    href={item.url}
                    className={`block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-1 lg:px-6 text-n-1 px-2 py-6 font-semibold ${
                      item.url === pathname
                        ? "z-2 lg:text-n-1 text-green-500"
                        : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  >
                    {item.title}
                  </Link>
                  <div className="w-0 group-hover:w-1/2 absolute h-2 bg-gradient-4 m-auto rounded-lg bottom-0 transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="block">
            {auth.type === AuthType.AUTHENTICATED ? (
              <div className="relative">
                <Poppins
                  btn={
                    <Image
                      id="avatarButton"
                      className="w-12 h-12 rounded-full cursor-pointer ring-2 ring-primary"
                      src={auth.user.avatar}
                      alt="User dropdown"
                      width={500}
                      height={500}
                    />
                  }
                  list={[
                    {
                      label: "Account Settings",
                      fn: () => {
                        router.push("/settings/account", { scroll: false });
                      },
                    },
                    {
                      label: "Preferences",
                      fn: () => {
                        router.push("/settings/account", { scroll: false });
                      },
                    },
                    {
                      label: "Subscription and Billing",
                      fn: () => {
                        router.push("/settings/account", { scroll: false });
                      },
                    },
                    {
                      label: "Help and Support",
                      fn: () => {
                        router.push("/settings/account", { scroll: false });
                      },
                    },
                    {
                      label: "Sign Out",
                      fn: () => {
                        $signOut.mutateAsync();
                        router.push("/auth/login", { scroll: false });
                      },
                    },
                  ]}
                  content={
                    <>
                      <div>{auth.user.name}</div>
                      <div className="font-medium truncate">
                        {auth.user.email}
                      </div>
                    </>
                  }
                />
              </div>
            ) : (
              <Button>Sign In</Button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden rounded-md bg-white backdrop-blur-2xl fixed top-0 left-0 z-40 w-full h-screen transition-all duration-200 ${
          isOpen
            ? "w-full translate-x-0 opacity-100"
            : "w-0 -translate-x-full opacity-0 lg:translate-x-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-20">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`block relative font-code uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-2 md:py-2 lg:-mr-0.25 text-lg ${
                item.url === pathname
                  ? "z-2 text-n-1 text-green-500"
                  : "lg:text-n-1/50"
              } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(AppTopBar);
