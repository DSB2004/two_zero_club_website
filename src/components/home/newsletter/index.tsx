"use client";

import React from "react";
import StaticData from "@/assets/static/home.static.json";
import ArticleCard from "./card";
import CardCarousel from "./carousel";
import { useBlogsStore } from "@/store/blogs.store";
export default function Newsletter() {
  const { articles, isLoading, isFetching } = useBlogsStore();
  return (
    <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto py-[25px] md:my-20">
      <div
        className="grid 
          grid-cols-1 sm:grid-cols-3 place-items-start gap-[25px] "
      >
        {articles?.map((ele, idx) => {
          return (
            <ArticleCard
              article={{ ...ele, idx: idx + 1 }}
              key={ele.id.toString()}
            />
          );
        })}
      </div>
    </section>
  );
}
