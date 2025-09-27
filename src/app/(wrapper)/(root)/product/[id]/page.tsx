"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useProductStore } from "@/store/product.store";
export default function page() {
  const { product, isLoading, isError } = useProductStore();
  if (!product || isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product.</div>;
  console.log(product);
  return (
    <div>
      {product.title}
      {}
    </div>
  );
}
