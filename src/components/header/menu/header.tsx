import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, User, ShoppingCart, X } from "lucide-react";
import Customer from "../customer";
import { useCart } from "@/provider/cart.provider";
import { useCartStore } from "@/store/cart.store";
export default function MenuHeader({
  close,
}: {
  close: (val: boolean) => void;
}) {
  const router = useRouter();
  const { open, setOpen: toggle } = useCart();
  const { cart } = useCartStore();

  return (
    <header className="bg-white w-full py-4 px-4 flex justify-between items-center">
      <Image
        onClick={() => router.push("/")}
        src="/svg/logo.svg"
        alt="logo"
        height="10"
        width="10"
        className=" w-16 xs:w-20 lg:w-26 "
      ></Image>

      <div className="flex items-center gap-3 justify-center">
        <Search className="w-5 h-5 xs:w-7 xs:h-7 cursor-pointer"></Search>
        <span className="relative cursor-pointer">
          <ShoppingCart
            className="w-5 h-5 xs:w-7 xs:h-7 cursor-pointer"
            onClick={() => {
              close(false);
              toggle((val) => !val);
            }}
          ></ShoppingCart>
          {!cart || cart.lines.length === 0 ? (
            <></>
          ) : (
            <>
              <span className="absolute -top-3 -right-2 bg-yellow-500 w-4 h-4 rounded-full flex items-center justify-center text-[0.6rem] text-white font-semibold">
                {cart.lines.length === 0 ? "" : cart.lines.length}
              </span>
            </>
          )}
        </span>
        <Customer></Customer>
        <X
          className="w-5 h-5 xs:w-7 xs:h-7 cursor-pointer"
          onClick={() => close(false)}
        />
      </div>
    </header>
  );
}
