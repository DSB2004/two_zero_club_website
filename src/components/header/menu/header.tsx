import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
export default function MenuHeader({
  close,
}: {
  close: (val: boolean) => void;
}) {
  const router = useRouter();

  return (
    <header className="bg-white w-full py-4 px-4 lg:px-16 flex justify-between items-center">
      <Image
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => router.push("/")}
        src="/svg/logo.svg"
        alt="logo"
        height="10"
        width="10"
        className=" w-16 xs:w-20 lg:w-26 "
      ></Image>

      <div className="flex items-center gap-3 justify-center">
        <X
          className="w-5 h-5 xs:w-7 xs:h-7 cursor-pointer"
          onClick={() => close(false)}
        />
      </div>
    </header>
  );
}
