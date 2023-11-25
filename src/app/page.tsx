"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";

/**
 * `Home` is a React component that serves as the home page of the application.
 *
 * @component
 * @example
 * return <Home />;
 *
 * @description
 * This component imports and uses the `useRouter` hook from "next/navigation" and the `Button` component from "@/components/Button". The `useRouter` hook is used to navigate to different pages in the application, and the `Button` component is used to create a button that the user can interact with.
 *
 * The `Home` component returns a `main` HTML element with a class of "center-in-page" that wraps the `Button` component. The `Button` component has an `onClick` event handler that navigates to the "/restaurants" page when the button is clicked.
 *
 * This structure allows for additional components or content to be easily added alongside the `Button` in the future.
 */
export default function Home() {
  const { push } = useRouter();

  return (
    <main className="center-in-page">
      <Button onClick={() => push("/restaurants")}>رستوران ها</Button>
    </main>
  );
}
