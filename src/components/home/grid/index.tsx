import React from "react";
import StaticData from "@/assets/static/home.static.json";
import CollectionCard from "../common/card";

export default function Grid() {
  return (
    <section className="w-full px-2 sm:px-10 lg:px-20 py-[25px] lg:py-[5.25rem] bg-green">
      <div className="max-w-[1775px]  m-auto grid grid-cols-1 md:grid-cols-2 gap-[50px] sm:gap-[25px] px-[10px] ">
        {StaticData.grid.map((ele, idx) => (
          <CollectionCard
            idx={idx}
            key={ele.id.toString()}
            {...ele}
          ></CollectionCard>
        ))}
      </div>
    </section>
  );
}
