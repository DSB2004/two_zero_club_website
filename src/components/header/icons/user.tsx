import React from "react";
import Image from "next/image";
export default function UserIcon(props: any) {
  return (
    <Image
      alt="user"
      height={10}
      width={10}
      src={"/svg/user.svg"}
      {...props}
    ></Image>
  );
}
