import type { Metadata } from "next";
import "@/styles/globals.scss";
import { ReactNode } from "react";
import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
  title: "Snapp food",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
