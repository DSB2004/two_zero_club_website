"use client";

import React, { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { parseSlug, parseNameToSlug } from "@/util/parseSlug";
export default function Breadcrumb() {
  const { collection } = useParams();
  const router = useRouter();
  const parts = parseSlug(collection?.toString() || "");
  return (
    <h4 className="font-area text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2 cursor-pointer">
      <span onClick={() => router.push("/")}>Home</span>
      {parts[0].toLowerCase() === "footer" ? (
        <></>
      ) : (
        <>
          <span
            onClick={() =>
              router.push(`/collections/${parseNameToSlug(parts[0])}`)
            }
            className="capitalize"
          >
            • {parts[0]}
          </span>
        </>
      )}

      {parts.slice(1).map((ele) => {
        return (
          <>
            <span
              key={ele}
              onClick={() => router.push(`/collections/${collection}`)}
              className="capitalize"
            >
              •{" "}
              {ele === "Plants Floral" ? (
                "Plants & Floral"
              ) : (
                <>{ele === "Food Drinks" ? "Food & Drinks" : ele}</>
              )}
            </span>
          </>
        );
      })}
    </h4>
  );
}

// poster-wall-decor -> Wall Decor and Poster  i want it like this
