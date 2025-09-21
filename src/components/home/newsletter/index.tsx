import React from "react";
import StaticData from "@/assets/static/home.static.json";
import NewsletterCard from "./card";
export default function Newsletter() {
  return (
    <section className="max-w-[1800px] px-4 md:px-16  w-full m-auto my-20">
      <div
        className="grid 
        md:grid-cols-2
       xl:grid-cols-4 place-items-center gap-4 "
      >
        {StaticData.newsletter.map((ele) => {
          return <NewsletterCard {...ele} key={ele.id.toString()} />;
        })}
      </div>
    </section>
  );
}
