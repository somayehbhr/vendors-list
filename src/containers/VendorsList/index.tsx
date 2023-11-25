"use client";
import React from "react";
import { Card } from "@/components/Card";
import { useGetVendors } from "@/containers/VendorsList/hooks/useGetVendors";
import styles from "./styles.module.scss";
import { Virtuoso } from "react-virtuoso";
import Spinner from "@/components/Spinner";

/**
 * `VendorsList` is a React component that displays a list of vendors.
 *
 * @component
 * @example
 * return <VendorsList />;
 *
 * @description
 * This component uses the `useGetVendors` custom hook to fetch vendor data and display it in a list. The list is implemented using the `Virtuoso` component from `react-virtuoso`, which provides efficient rendering for large lists.
 *
 * If there are no vendors, a `Spinner` component is displayed while the data is being fetched.
 *
 * Each vendor in the list is displayed using the `Card` component, with the vendor data passed as a prop.
 *
 * The endReached prop of the Virtuoso component fetches more vendor data when the user scrolls to the end of the list.
 */

export const VendorsList = () => {
  const { vendors, fetchMore } = useGetVendors();

  if (!vendors?.length) {
    return <Spinner />;
  }

  return (
    <div className={styles["list"]}>
      <Virtuoso
        totalCount={vendors?.length ?? 0}
        endReached={async () => await fetchMore()}
        itemContent={(index) => <Card data={vendors?.[index]?.data} />}
      />
    </div>
  );
};
