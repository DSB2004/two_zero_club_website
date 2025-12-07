"use client";
import StaticData from "@/assets/static/menu.static.json";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

function TagItem({ active, tag }: { active: boolean; tag: string }) {
  const { collection } = useParams();
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push("/" + collection + "/" + tag)}
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
  const { collection, sub } = useParams();
  const decodedCollection = collection
    ? decodeURIComponent(collection.toString())
    : "";
  const decodedSub = sub ? decodeURIComponent(sub.toString()) : "";

  const isTagSelected = (tag: string) => tag === decodedSub;

  return (
    <div className="my-2 sm:my-5">
      <h2 className="text-[2.75rem] font-editorial capitalize">
        {decodedSub.toLowerCase() === "all" ? decodedCollection : decodedSub}
      </h2>
      <div className="flex space-x-1 sm:space-x-3 flex-wrap">
        <TagItem active={isTagSelected("all")} key="all" tag="all"></TagItem>
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
