import React from "react";
import Image from "next/image";
interface IPROPS {
  thumbnail: string;
  id: number;
}

export default function SeenInCard(data: IPROPS) {
  return (
    <Image

      src={data.thumbnail}
      alt={data.id.toString()}
      height="500"
      width="500"
      className="w-[150px]"
    />
  );
}
