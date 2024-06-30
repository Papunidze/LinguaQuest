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
      <main className="flex items-center justify-center h-[calc(100vh_-_4rem)]">
        <div className="bg-white flex  max-w-6xl p-4 w-full container rounded-3xl shadow-lg gap-4 m-auto">
          <aside className="flex-1 flex items-center justify-start w-full flex-col relative">
            <div className="max-w-md w-full m-auto">
              <section className="flex items-start justify-center w-full flex-col">
                {children}
              </section>
            </div>
          </aside>
          <aside className="flex-1 md:block hidden rounded-3xl shadow-md">
            <Image
              src="/images/banner.svg"
              alt="Company Logo"
              className="object-cover rounded-2xl w-full h-full shadow-inner"
              width={500}
              height={500}
            />
          </aside>
        </div>
      </main>
    </>
  );
}
/*
      {/* <main className="h-full w-full flex items-center justify-center ">
        <div className=" absolute left-0 top-0 flex p-8 w-full h-full items-center justify-center">
          <div className="bg-white flex w-full p-4  container rounded-3xl shadow-lg gap-4 h-max">
            <aside className="flex-1	flex items-center justify-start w-full flex-col relative">
              <div className="max-w-md w-full m-auto">
                <section className="flex items-start justify-center w-full flex-col">
                  {children}
                </section>
              </div>
            </aside>
            <aside className="flex-1 lg:block hidden rounded-3xl shadow-md ">
              <Image
                src="/images/banner.svg"
                alt="Company Logo"
                className="object-cover rounded-2xl  w-full h-full shadow-inner"
                width={500}
                height={500}
              />
            </aside>
          </div>
        </div>
      </main> */
