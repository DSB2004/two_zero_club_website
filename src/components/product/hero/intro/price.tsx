import { Product } from "@/lib/shopify/types";
import React from "react";
import { useProduct } from "@/provider/product.provider";

export default function Price({ data }: { data: Product }) {
  const { variant } = useProduct();

  const price = variant
    ? variant.price.amount
    : data.priceRange.minVariantPrice.amount;

  return (
    <div className="font-light text-[1.25rem] flex items-center gap-2 font-area">
      <span>${Number(price).toFixed(2)}</span>
    </div>
  );
}
