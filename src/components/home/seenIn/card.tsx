"use client";

import Image from "next/image";

interface IPROPS {
  thumbnail: string;
  id: number;
}

export default function SeenInCard({ thumbnail, id }: IPROPS) {
  return (
    <div className="relative w-[160px] h-[80px] flex items-center justify-center">
      <Image
        src={thumbnail}
        alt={`seen-in-${id}`}
        fill
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="object-contain"
      />
    </div>
  );
}
