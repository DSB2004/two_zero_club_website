"use client";

import React, { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";

export default function Breadcrump({ data }: { data: Product }) {
  const params = useSearchParams();
  const router = useRouter();
  const { collection } = data;

  const main = useMemo(() => {
    const parts = collection.split("-");
    if (parts.includes("home")) return "Home & Living";
    else if (parts.includes("wall")) return "Wall Decor";
    else return "Tech & Accessories";
  }, [collection]);

  const mainTicker = useMemo(() => {
    return main.replaceAll(" & ", "-").toLowerCase();
  }, [main]);

  const sub = useMemo(() => {
    console.log(collection);
    const parts = collection.split("-");
    const mainFirst = mainTicker.split("-")[0];
    const index = parts.indexOf(mainFirst);
    const subPart = parts.slice(0, index);
    console.log(subPart);
    return subPart.join(" ");
  }, [mainTicker]);

  // const subTicker = useMemo(() => {
  //   return sub.replaceAll(" & ", "-").toLowerCase();
  // }, [sub]);

  // anything-home-living  || anything=wall-decor  || anything-tech-accessories
  return (
    <h4 className="font-area text-[0.75rem] lg:text-[1rem] font-bold cursor-pointer">
      <span
        onClick={() => router.push("/" + mainTicker + "/all")}
        className="capitalize"
      >
        {main}
      </span>
      <>
        {sub && sub !== "null" ? (
          <span
            className="capitalize"
            onClick={() => router.push("/" + mainTicker + "/" + sub)}
          >
            {" "}
            • {sub}
          </span>
        ) : (
          <span className="capitalize"> • {data.title.split(":")[0]}</span>
        )}
      </>
    </h4>
  );
}
