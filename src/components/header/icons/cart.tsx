import React from "react";
import Image from "next/image";
export default function CartIcon(props: any) {
  return (
    <Image
      alt="Cart"
      height={10}
      width={10}
      src={"/svg/cart.svg"}
      {...props}
    ></Image>
  );
}
