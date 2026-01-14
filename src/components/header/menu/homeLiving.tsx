import {
  AccordionContent2 as AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import ShopByColor from "./shopByColor";
import React from "react";
import Image from "next/image";
export default function HomeLiving({
  close,
}: {
  close: (val: boolean) => void;
}) {
  const router = useRouter();
  function handleClick(tag: string) {
    const slug = tag + "-home-living";
    router.push("/collections/" + slug);
    close(false);
  }
  return (
    <AccordionItem value="item-2" className="!border-b-1 border-black/50">
      <AccordionTrigger2 className=" !text-[1.375rem] font-area !font-black">
        Home & Living
      </AccordionTrigger2>
      <AccordionContent className="flex flex-col gap-2 font-area max-h-[10000px] overflow-y-auto !text-[1.125rem]">
        <h2 className="text-[10px] font-bold  font-area text-[#F33C14]">
          LIVING ROOM
        </h2>
        <ul className="pl-0 font-area cursor-pointer">
          <li onClick={() => handleClick("rugs")}>Rugs</li>
          <li onClick={() => handleClick("throw-blankets")}>Throw Blankets </li>
          <li onClick={() => handleClick("throw-pillows")}>Throw Pillows </li>
          {/* <li onClick={() => handleClick("wall-clocks")}>Wall Clocks </li> */}
          <li onClick={() => handleClick("tapestries")}>Tapestries</li>
        </ul>
        <h2 className="text-[10px] font-bold  font-area text-[#08814E]">
          BEDROOM
        </h2>
        <ul className="pl-0 font-area">
          <li onClick={() => handleClick("duvet-covers")}>Duvet Covers</li>
          <li onClick={() => handleClick("pillow-covers")}>Pillow Covers</li>
        </ul>
        <h2 className="text-[10px] font-bold  font-area text-[#064BD6]">
          BATHROOM
        </h2>
        <ul className="pl-0 font-area">
          <li onClick={() => handleClick("bath-mats")}>Bath Mats</li>
          <li onClick={() => handleClick("towels")}>Towels </li>
          <li onClick={() => handleClick("shower-curtains")}>
            Shower Curtains
          </li>
        </ul>
        <ShopByColor click={handleClick}></ShopByColor>
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full"
          src={"/images/menu/home-living.png"}
          alt="menu-image"
          width="750"
          height="500"
        ></Image>
      </AccordionContent>
    </AccordionItem>
  );
}
