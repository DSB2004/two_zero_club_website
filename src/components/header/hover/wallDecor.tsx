import React from "react";
import Image from "next/image";
import StaticData from "@/assets/static/menu.static.json";

import { useRouter } from "next/navigation";
export default function WallDecor() {
  const router = useRouter();
  function handleClick(sub: string) {
    router.push(`/Wall Decor/${sub}`);
  }
  return (
    <>
      <div
        className="
      fixed top-20 z-[1000] left-1/2 -translate-x-1/2 w-[95svw] max-w-[1400px]
      bg-green shadow-sm p-10
      opacity-0 transition-opacity duration-300
      pointer-events-none
      peer-hover:opacity-100 peer-hover:pointer-events-auto
      group-hover:opacity-100 group-hover:pointer-events-auto  rounded-bl-[1.5rem] rounded-br-[1.5rem]
    "
      >
        <div className=" w-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 min-h-96 gap-5 space-y-5">
          <div className="border-r border-black/50 ">
            <h2 className="text-[1.625rem] font-[editorial] mb-5">Featured</h2>
            <ul className="pl-0 font-[area] cursor-pointer ">
              {StaticData.featured.map((item, index) => (
                <li key={item + index} onClick={() => handleClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-r border-black/50 ">
            <h2 className="text-[1.625rem] font-[editorial] mb-5">
              Categories
            </h2>
            <ul className="pl-0 font-[area] cursor-pointer">
              <li onClick={() => handleClick("Art Prints")}>Art Prints</li>
              <li onClick={() => handleClick("Framed Prints")}>
                Framed Prints{" "}
              </li>
              <li onClick={() => handleClick("Posters Wall")}>Posters Wall </li>
              <li onClick={() => handleClick("Tapestries")}>Tapestries</li>
              <li onClick={() => handleClick("Canvas")}>Canvas</li>
            </ul>
          </div>

          <div className="border-r border-black/50 ">
            <h2 className="text-[1.625rem] font-[editorial] mb-5">
              Shop by Color
            </h2>
            <h2 className="text-[14px] font-bold text-[#064BD6] font-[area] mb-2">
              CLASSICS
            </h2>
            <div className="grid grid-cols-4 gap-2 mb-4 place-items-start justify-center w-48 cursor-pointer">
              {StaticData.classic.map((color, index) => (
                <div
                  onClick={() => handleClick(color)}
                  key={color + "classic" + index}
                  className="w-10 h-[30px] rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <h2 className="text-[14px] font-bold text-[#FF004F] font-[area] mb-2">
              TRENDING
            </h2>
            <div className="grid grid-cols-4 gap-2 mb-4 w-48 cursor-pointer">
              {StaticData.trending.map((color, index) => (
                <div
                  onClick={() => handleClick(color)}
                  key={color + "trending" + index}
                  className="w-10 h-[30px] rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-[1.625rem] font-[editorial] mb-5 ">
              Shop by Subject
            </h2>
            <ul className="pl-0 font-[area] cursor-pointer">
              {StaticData.shop.map((item, index) => (
                <li onClick={() => handleClick(item)} key={item + index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:block hidden">
            <Image
              className="h-full min-w-56"
              src={"/images/hover/wall.png"}
              alt="menu-image"
              width="400"
              height="1000"
            ></Image>
          </div>
        </div>
      </div>
      <div
        className="
    fixed top-0 left-0 h-full w-full
    bg-black/20 opacity-0 transition-opacity duration-300
    pointer-events-none
    peer-hover:opacity-100
    group-hover:opacity-100
  "
      ></div>
    </>
  );
}
