import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import ShopByColor from "./shopByColor";
import React from "react";
import Image from "next/image";
export default function WallDecor({
  close,
}: {
  close: (val: boolean) => void;
}) {
  const router = useRouter();
  function handleClick(tag: string) {
    const slug = tag.split(" ").join("-").toLowerCase() + "-wall-decor";
    router.push("/collections/" + slug);
    close(false);
  }
  return (
    <AccordionItem value="item-1" className="!border-b-1 border-black/50">
      <AccordionTrigger2 className="  !text-[1.125rem] font-area !font-black">
        Wall Decor
      </AccordionTrigger2>
      <AccordionContent className="flex flex-col gap-4 font-area max-h-[10000px] overflow-y-auto !text-[1rem]">
        <div className="pl-0 font-area cursor-pointer flex flex-col gap-1">
          <li onClick={() => handleClick("Art Print")}>Art Prints</li>
          <li onClick={() => handleClick("Framed Print")}>Framed Prints</li>
          <li onClick={() => handleClick("Poster")}>Posters</li>
          <li onClick={() => handleClick("Wall Tapestries")}>
            Wall Tapestries
          </li>
          <li onClick={() => handleClick("Canvas")}>Canvas</li>
        </div>
        <ShopByColor click={handleClick}></ShopByColor>
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full"
          src={"/images/menu/wall-decor.png"}
          alt="menu-image"
          width="750"
          height="500"
        ></Image>
      </AccordionContent>
    </AccordionItem>
  );
}
