import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LinguaQuest",
    template: "%s | LinguaQuest",
  },
  description:
    "A playground to explore new QrSearch features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  openGraph: {
    title: "QrSearch Playground",
    description:
      "A playground to explore new QrSearch features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pb-36 bg-gray-100 h-screen max-h-[-webkit-fill-available] overflow-auto m-auto pt-4 px-4 ">
        <div className="mx-auto space-y-8 px-2 pt-20 lg:px-8 lg:py-8 ">
          <div className="rounded-lg p-px bg-background-secondary ">
            <div className="rounded-lg  p-3.5 lg:p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
