"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getFullCollectionProducts } from "@/actions/products/collection.action";
import { useProductStore } from "./product.store";

interface FullCollectionStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  products: any[] | undefined;
  error: Error | null;
}

const FullCollectionStoreContext =
  createContext<FullCollectionStoreInterface | null>(null);

export const FullCollectionStore = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { product: data } = useProductStore();

  const {
    isFetching,
    isError,
    isLoading,
    data: products,
    error,
  } = useQuery<any | undefined>({
    queryKey: ["product-collection", data?.collection],
    queryFn: async () => {
      const res = await getFullCollectionProducts(data?.collection || "");
      return res;
    },
    enabled: !!data?.collection,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <FullCollectionStoreContext.Provider
      value={{ isLoading, isError, isFetching, products, error }}
    >
      {children}
    </FullCollectionStoreContext.Provider>
  );
};

export const useFullCollectionStore = () => {
  const ctx = useContext(FullCollectionStoreContext);
  if (!ctx)
    throw new Error(
      "useFullCollectionStore must be used inside FullCollectionStore"
    );
  return ctx;
};
