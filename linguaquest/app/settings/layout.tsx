import Head from "next/head";
import SettingsLeftBar from "./components/settingsLeftBar";

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
      <div className="flex w-full ">
        <SettingsLeftBar />
        <div className="p-4 sm:ml-14 w-full">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
