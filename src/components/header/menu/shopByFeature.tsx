import React from "react";

import Link from "next/link";
export default function ShopByFeature() {
  return (
    <>
      <div className="flex flex-col gap-1 !border-b-1 py-4 border-black/50 cursor-pointer">
        <Link
          href="/footer/New"
          className="text-[1rem] font-[area] font-extrabold "
        >
          New
        </Link>
        <Link
          href="/footer/Trending"
          className="text-[1rem] font-[area] font-extrabold "
        >
          Trending
        </Link>
        <Link
          href="/footer/BestSellers"
          className="text-[1rem] font-[area] font-extrabold "
        >
          BestSellers
        </Link>
        <Link
          href="/footer/As seen on social"
          className="text-[1rem] font-[area] font-extrabold "
        >
          As seen on Social
        </Link>
      </div>
      <div className=" py-4 flex flex-col gap-1 cursor-pointer">
        <Link href="/contact" className="text-[0.75rem] font-bold font-[area]">
          Contact Us
        </Link>
        <Link href="/faq" className="text-[0.75rem] font-bold font-[area]">
          Help
        </Link>
      </div>
    </>
  );
}
