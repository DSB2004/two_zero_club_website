"use client";
import StaticData from "@/assets/static/menu.static.json";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { parseNameToSlug, parseSlug } from "@/util/parseSlug";

function TagItem({ active, tag }: { active: boolean; tag: string }) {
  const { collection } = useParams();
  const router = useRouter();
  const [c] = parseSlug(collection?.toString() || "");
  const slug =
    tag === "all"
      ? parseNameToSlug(c)
      : tag.split(" ").join("-").toLowerCase() + "-" + parseNameToSlug(c);
  return (
    <>
      <div
        onClick={() => router.push("/collections/" + slug)}
        className={cn(
          "font-area cursor-pointer text-[0.8rem] xl:text-[1.125rem] px-4 min-w-14 h-[36px] flex items-center justify-center rounded-full border transition-all",
          active ? "border-black" : "border-transparent"
        )}
      >
        <p key={`featured-all`} className="leading-[0.9] capitalize">
          {tag}
        </p>
      </div>
    </>
  );
}

export default function Tags() {
  const { collection } = useParams();
  const parts = parseSlug(collection?.toString() || "");

  const isTagSelected = (tag: string) =>
    parts[1]?.toLowerCase().trim() === tag.toLowerCase().trim();

  return (
    <div className="my-2 sm:my-5">
      <h2 className="text-[2.75rem] font-editorial capitalize">
        {parts.length === 2 ? parts[1] : parts[0]}
      </h2>
      <div className="flex space-x-1 sm:space-x-3 flex-wrap">
        <TagItem active={parts.length === 1} key="all" tag="all"></TagItem>
        {StaticData?.featured?.map((tag, idx) => (
          <TagItem
            active={isTagSelected(tag)}
            key={"feature" + idx}
            tag={tag}
          ></TagItem>
        ))}

        {StaticData?.shop?.map((tag, idx) => (
          <TagItem
            active={isTagSelected(tag)}
            key={"feature-shop" + idx}
            tag={tag}
          ></TagItem>
        ))}
      </div>
    </div>
  );
}
