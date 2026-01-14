"use client";
import StaticData from "@/assets/static/menu.static.json";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Tags() {
  const { collection, sub } = useParams();

  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  return (
    <div className="my-2 sm:my-5">
      <h2 className="text-[1.5rem] sm:text-[2.75rem] font-editorial capitalize">
        Results for “{q}”
      </h2>
    </div>
  );
}
