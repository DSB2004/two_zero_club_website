"use client";

import React, { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Breadcrumb() {
  const { collection, sub } = useParams();
  const router = useRouter();

  const rawCollection = collection?.toString() ?? "";
  const rawSub = sub?.toString() ?? "";

  const decodedCollection = decodeURIComponent(rawCollection);
  const decodedSub = decodeURIComponent(rawSub);

  const formatter = (str: string) => {
    if (!str) return "";

    const map: Record<string, string> = {
      "Home Living": "Home & Living",
      "Tech Accessories": "Tech & Accessories",
      "Wall Decor": "Wall Decor",
      Clothing: "Clothing",
      footer: "Footer",
    };

    return (
      map[str] ||
      str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    );
  };

  const formattedCollection = useMemo(
    () => formatter(decodedCollection),
    [decodedCollection]
  );

  const formattedSub = useMemo(() => formatter(decodedSub), [decodedSub]);

  useEffect(() => {
    if (decodedCollection === "footer") {
      document.title = `${formattedSub}`;
    } else {
      document.title = `${formattedCollection} • ${formattedSub}`;
    }
  }, [formattedCollection, formattedSub, decodedCollection]);

  return (
    <h4 className="font-area text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2 cursor-pointer">
      <span onClick={() => router.push("/")}>Home</span>

      {decodedCollection.toLowerCase() !== "footer" && (
        <span
          onClick={() => router.push(`/${decodedCollection}/all`)}
          className="capitalize"
        >
          • {formattedCollection}
        </span>
      )}

      {decodedSub.toLowerCase() !== "all" && (
        <span className="capitalize">• {formattedSub}</span>
      )}
    </h4>
  );
}
