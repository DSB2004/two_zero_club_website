"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
export default function Breadcrump() {
  const params = useSearchParams();

  const collection = params.get("collection");
  const sub = params.get("sub");
  return (
    <h4 className="font-[area] text-[0.75rem] lg:text-[1rem] font-bold">
      <span className="capitalize">{collection}</span>
      <>{sub ? <span className="capitalize"> • {sub}</span> : <></>}</>
    </h4>
  );
}
