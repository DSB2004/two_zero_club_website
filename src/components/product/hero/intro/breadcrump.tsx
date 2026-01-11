"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";
import { parseNameToSlug, parseSlug, prettifyTagName } from "@/util/parse";

export default function Breadcrump({ data }: { data: Product }) {
  const router = useRouter();
  const { collection } = data;

  const parts = parseSlug(collection);
  const main = parseNameToSlug(parts[0]);
  const sub = parseNameToSlug(parts[1]);

  return (
    <h4 className="font-area text-[0.875rem] font-bold cursor-pointer my-2">
      <span
        onClick={() => router.push("/collections/" + main)}
        className="capitalize"
      >
        {prettifyTagName(parts[0])}
      </span>

      {parts.length > 1 &&
        parts.slice(1).map((ele, idx) =>
          ele.toLowerCase() === "all" ? null : (
            <span
              key={idx}
              className="capitalize"
              onClick={() => router.push("/collections/" + sub + "-" + main)}
            >
              {" "}
              • {prettifyTagName(ele)}
            </span>
          )
        )}
    </h4>
  );
}
