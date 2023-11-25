import type { Metadata } from "next";
import "@/styles/globals.scss";
import { ReactNode } from "react";
import ReduxProvider from "@/redux/provider";

/**
 * `RootLayout` is a React component that serves as the root layout for the application.
 *
 * @component
 * @example
 * return <RootLayout>{children}</RootLayout>;
 *
 * @description
 * This component imports and uses the `ReduxProvider` component from "@/redux/provider". The `ReduxProvider` component is responsible for providing the Redux store to the rest of the application.
 *
 * The `RootLayout` component returns an `html` element with `lang` set to "fa" and `dir` set to "rtl", indicating that the language of the application is Farsi and the text direction is right-to-left. Inside the `html` element, a `body` element wraps the `ReduxProvider` component, which in turn wraps the `children` prop. This structure allows for additional components or content to be easily added alongside the `ReduxProvider` in the future.
 *
 * The `metadata` object provides metadata for the application, including the title and description.
 */
export const metadata: Metadata = {
  title: "Snapp Food!",
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
