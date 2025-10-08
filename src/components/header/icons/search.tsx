import React from "react";
import Image from "next/image";
export default function SearchIcon(props: any) {
  return (
    <Image
      alt="search"
      height={10}
      width={10}
      src={"/svg/search.svg"}
      {...props}
    ></Image>
  );
}
