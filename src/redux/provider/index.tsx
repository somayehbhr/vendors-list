"use client";
import { Provider } from "react-redux";
import React from "react";
import { store } from "@/redux/store";

/**
 * `ReduxProvider` is a React component that wraps its children with the Redux `Provider` component.
 *
 * @component
 * @example
 * return (
 *   <ReduxProvider>
 *     <App />
 *   </ReduxProvider>
 * );
 *
 * @description
 * This component accepts a single prop: `children`, which represents the child components that will be wrapped by the Redux `Provider`.
 *
 * The `ReduxProvider` component returns the Redux `Provider` component with the `store` passed as a prop. The `store` is imported from "@/redux/store". All child components passed to `ReduxProvider` will have access to this Redux store.
 *
 * This structure allows for a high degree of customization, as any React components can be passed as children to this `ReduxProvider` component.
 */
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
