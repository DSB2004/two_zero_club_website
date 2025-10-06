import React, { ReactNode } from "react";
import { TrendingStore } from "@/store/trending.store";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TrendingStore>{children}</TrendingStore>
    </>
  );
}
