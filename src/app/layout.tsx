import type { Metadata } from "next";
import "src/styles/globals.scss";
import ReduxProvider from "@/redux/provider";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Snapp food",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
