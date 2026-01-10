import React from "react";
import Image from "next/image";
export default function CartIcon(props: any) {
  return (
    <Image
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      alt="Cart"
      height={50}
      width={50}
      src={"/cart.png"}
      {...props}
    ></Image>
  );
}
