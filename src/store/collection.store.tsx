"use client";

import React, { createContext, useContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { getCollectionProducts } from "@/actions/collections/get.action";

interface CollectionStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  products: any[];
  error: Error | null;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

const CollectionStoreContext = createContext<CollectionStoreInterface | null>(
  null
);

export const CollectionStore = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { collection } = useParams();
  const searchParams = useSearchParams();
  const pageCursor = searchParams.get("p") || undefined;

  const {
    data,
    isFetching,
    isError,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["collection", collection],
    // @ts-ignore
    queryFn: async ({ pageParam }) => {
      if (!collection) {
        return {
          products: [],
          pageInfo: { hasNextPage: false, endCursor: null },
        };
      }

      const res = await getCollectionProducts({
        handle: collection.toString(),
        first: 10,
        after: pageParam || pageCursor,
      });

      return res;
    },

    getNextPageParam: (lastPage) =>
      lastPage?.pageInfo?.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    initialPageParam: undefined,
    enabled: !!collection,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const products = data?.pages.flatMap((page: any) => page.products) ?? [];

  return (
    <CollectionStoreContext.Provider
      value={{
        isLoading,
        isError,
        isFetching,
        products,
        error: error as Error | null,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      }}
    >
      {children}
    </CollectionStoreContext.Provider>
  );
};

export const useCollectionStore = () => {
  const ctx = useContext(CollectionStoreContext);
  if (!ctx)
    throw new Error("useCollectionStore must be used inside CollectionStore");
  return ctx;
};
