import { List } from "react-virtualized";
import React from "react";
import { Card } from "@/components/Card";
import { useGetVendors } from "@/containers/VendorsList/hooks/useGetVendors";
import styles from "./styles.module.scss";

export const VendorsList = () => {
  const { vendors } = useGetVendors();

  return (
    <List
      width={800}
      containerStyle={{ overflow: "visible" }}
      height={window.innerHeight}
      rowHeight={20}
      rowCount={vendors?.finalResult?.length ?? 0}
      rowRenderer={({ key, index }) => {
        return (
          <Card
            data={vendors?.finalResult?.[index]?.data}
            key={vendors?.finalResult?.[index]?.data.id}
          />
        );
      }}
    />
  );
};
