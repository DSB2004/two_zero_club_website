import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useBuyItem } from "@/hooks/cart.hooks";
import { useProduct } from "@/provider/product.provider";
import { Loader } from "lucide-react";
export default function Checkout() {
  const { buy, loading } = useBuyItem();
  const { variant, quantity } = useProduct();
  return (
    <Button
      disabled={loading}
      onClick={() => {
        if (!variant || quantity < 1) return;
        buy({ merchandiseId: variant.id, quantity });
      }}
      className="bg-[#5433EB] hover:bg-[#5031db] font-area rounded-full text-[1rem] font-semibold px-5  w-full !h-[45px] sm:!h-[40px] relative !gap-0"
    >
      {/* <div className="absolute top-1/2 -translate-y-[1/2] border border-black w-full"></div>

      <div className="absolute inset-y-0 left-1/2 w-px bg-black" /> */}

      {loading ? (
        <>
          <Loader className="animate-spin duration-500"></Loader>
        </>
      ) : (
        <>
          <span className="-translate-[1.75px]">Pay with</span>
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src="/svg/shop-pay.svg"
            alt="basket"
            width={100}
            height={100}
            className="h-[20px]"
          ></Image>
        </>
      )}
    </Button>
  );
}
