"use client";
import React from "react";
import { VendorsList } from "@/containers/VendorsList";

/**
 * `Restaurants` is a React component that serves as a wrapper for the `VendorsList` component.
 *
 * @component
 * @example
 * return <Restaurants />;
 *
 * @description
 * This component imports and uses the `VendorsList` component from "@/app/restaurants/containers/VendorsList". The `VendorsList` component is responsible for fetching and displaying a list of vendors.
 *
 * The `Restaurants` component returns a `main` HTML element that wraps the `VendorsList` component. This structure allows for additional components or content to be easily added alongside the `VendorsList` in the future.
 */
export default function Restaurants() {
  return (
    <main>
      <VendorsList />
    </main>
  );
}
