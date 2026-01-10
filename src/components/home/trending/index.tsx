"use client";

import React from "react";

import TrendingCard from "./card";
import CardCarousel from "./carousel";
import StaticData from "@/assets/static/home.static.json";
export default function Trending() {
  return (
    <section className="max-w-[1775px] px-4 lg:px-16  w-full m-auto my-0 mt-[50px] md:my-20 space-y-[25px] md:space-y-[1.5rem]">
      <h2 className=" text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial">
        {"What's Trending"}
      </h2>
      <div
        className="grid my-[25px] sm:my-0
      sm:grid-cols-2
       xl:grid-cols-4 place-items-start gap-[50px] sm:gap-[25px]  "
      >
        {StaticData.trending?.map((ele, idx) => {
          return <TrendingCard idx={idx} {...ele} key={ele.id.toString()} />;
        })}
      </div>
    </section>
  );
}
