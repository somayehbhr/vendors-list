"use client";
import styles from "./page.module.scss";

import React from "react";

import { VendorsList } from "@/containers/VendorsList";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <VendorsList />
    </main>
  );
}
