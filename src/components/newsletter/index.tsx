"use client";

import React from "react";
import Image from "next/image";
import NewsletterForm from "./form";
export default function Newsletter() {
  return (
    <section className="bg-brown p-[25px] md:p-[3.125rem]">
      <div className=" flex justify-center gap-10 lg:gap-[4rem] xl:gap-[7rem] items-center flex-col   [@media(min-width:950px)]:flex-row  max-w-[2000px] m-auto">
        <Image
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA..."
          placeholder="blur"
          src="/images/newsletter.png"
          alt="newsletter-image"
          width="1000"
          height="1000"
          className="w-full lg:w-[600px]"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>

        <div className="space-y-[1.5rem] hidden lg:block">
          <div className="gap-[10px] flex flex-col">
            <div className="flex flex-col">
              <h2 className=" text-5xl xl:text-[3.125rem] leading-4xl xl:leading-[2.75rem] font-editorial ">
                Get updates, offers
              </h2>
              <h2 className=" text-5xl xl:text-[3.125rem] leading-4xl xl:leading-[2.75rem] font-editorial ">
                & special invites.
              </h2>
            </div>
            <div className="flex flex-col">
              <span className="text-[1.2rem] font-area leading-[120%] ">
                Join our newsletter &
              </span>
              <span className="text-[1.2rem] font-area leading-[120%] ">
                get 20% off your first order.
              </span>
            </div>
          </div>
          <NewsletterForm></NewsletterForm>
        </div>

        <div className="space-y-[1.5rem] block lg:hidden">
          <div className="gap-[10px] flex flex-col">
            <div className="flex flex-col">
              <h2 className=" text-4xl  leading-4xl  font-editorial ">
                Get updates, offers & special invites.
              </h2>
            </div>
            <div className="flex flex-col">
              <span className="text-[1rem] font-area leading-[120%] ">
                Join our newsletter & get 20% off your first order.
              </span>
            </div>
          </div>
          <NewsletterForm></NewsletterForm>
        </div>
      </div>
    </section>
  );
}
