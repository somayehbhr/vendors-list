"use client";
import React from "react";
import { Card } from "@/components/Card";
import { useGetVendors } from "@/app/restaurants/containers/VendorsList/hooks/useGetVendors";
import styles from "./styles.module.scss";
import { Virtuoso } from "react-virtuoso";
import Spinner from "@/components/Spinner";

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
