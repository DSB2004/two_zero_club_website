import React from "react";
import { useRouter } from "next/navigation";
export default function Popular({
  onClick,
}: {
  onClick: (val: boolean) => void;
}) {
  const router = useRouter();
  const handleClick = (label: string) => {
    router.push(`/search?q=${label}`);
    onClick(false);
  };
  return (
    <div className=" w-full   border-r-1 border-b-1 pb-4 lg:pb-0 lg:pr-2 pr-0  border-b-black/50 border-r-transparent lg:border-b-transparent lg:border-r-black/50 ">
      <h2 className="text-[1.25rem] font-[area] font-bold mb-5">
        Popular Products
      </h2>
      <ul className="pl-0 font-[area] cursor-pointer">
        <li onClick={() => handleClick("Art Prints")}>Art Prints</li>
        <li onClick={() => handleClick("Framed Prints")}>Framed Prints</li>
        <li onClick={() => handleClick("Posters Wall")}>Posters Wall</li>
        <li onClick={() => handleClick("Phone Cases")}>Phone Cases </li>
        <li onClick={() => handleClick("T-Shirts")}>T-Shirts</li>
        <li onClick={() => handleClick("Hoodies")}>Hoodies</li>
        <li onClick={() => handleClick("Rugs")}>Rugs</li>
      </ul>
    </div>
  );
}
