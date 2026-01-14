"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import MenuData from "@/assets/static/menu.static.json";
import { parseSlug, prettifyTagName, toSlug } from "@/util/parse";
export default function Breadcrumb() {
  const { collection } = useParams();
  const router = useRouter();
  const parts = parseSlug(collection?.toString() || "");

  const categoryLabel = parts[0];
  const categorySlug = categoryLabel ? toSlug(categoryLabel) : undefined;

  const subCategoryOrFilter = parts[1];
  // @ts-ignore
  const categoryKeys = MenuData.categories[categorySlug] ?? [];

  return (
    <h4 className="font-area text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold gap-1 flex cursor-pointer">
      <span onClick={() => router.push("/")}>Home</span>

      {parts[0].toLowerCase() === "footer" ? (
        <></>
      ) : (
        <>
          <span>•</span>
          <span
            onClick={() => router.push(`/collections/${toSlug(parts[0])}`)}
            className="capitalize"
          >
            {prettifyTagName(parts[0])}
          </span>
        </>
      )}
      {categoryKeys.includes(toSlug(subCategoryOrFilter)) ? (
        <>
          <span>•</span>
          <span
            onClick={() =>
              router.push(
                `/collections/${toSlug(subCategoryOrFilter)}-${toSlug(
                  categoryLabel
                )}`
              )
            }
            className="capitalize"
          >
            {prettifyTagName(subCategoryOrFilter)}
          </span>

          {parts.slice(2).map((ele) => {
            return (
              <>
                <span>•</span>
                <span key={ele} className="capitalize">
                  {prettifyTagName(ele)}
                </span>
              </>
            );
          })}
        </>
      ) : (
        <>
          {parts.slice(1).map((ele) => {
            return (
              <>
                <span>•</span>
                <span key={ele} className="capitalize">
                  {prettifyTagName(ele)}
                </span>
              </>
            );
          })}
        </>
      )}
    </h4>
  );
}
