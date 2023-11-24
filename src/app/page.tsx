"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";

export default function Home() {
  const { push } = useRouter();

  return (
    <main className="center-in-page">
      <Button onClick={() => push("/restaurants")}>رستوران ها</Button>
    </main>
  );
}
