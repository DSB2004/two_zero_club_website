import React from "react";
import ReviewCard from "./card";
import StaticData from "@/assets/static/home.static.json";
export default function Review() {
  return (
    <section>
      <ReviewCard {...StaticData.testimony}></ReviewCard>
    </section>
  );
}
