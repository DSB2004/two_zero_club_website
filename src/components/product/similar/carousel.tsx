import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { useSimilarStore } from "@/store/similar.store";
import Card from "./card";
import Loading from "./loading";
export default function CardCarousel() {
  const { products, isFetching, isError, isLoading } = useSimilarStore();
  const items = products?.slice(0, 5) || [];

  if (isFetching || isLoading || !products) {
    return (
      <Carousel>
        <CarouselContent>
          {Array.from([1, 2, 3, 4]).map((item) => (
            <CarouselItem
              key={item}
              className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Loading />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mb-4" />
      </Carousel>
    );
  }

  return (
    <Carousel>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Card {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots className="mb-4" />
    </Carousel>
  );
}
