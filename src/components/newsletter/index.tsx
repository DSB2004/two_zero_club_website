import React from "react";
import Image from "next/image";
import NewsletterForm from "./form";
export default function Newsletter() {
  return (
    <section className="bg-brown p-10 ">
      <div className=" flex justify-center gap-10 items-center flex-col lg:flex-row  max-w-[2000px] m-auto">
        <Image
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA..."
          placeholder="blur"
          src="/images/newsletter.png"
          alt="newsletter-image"
          width="500"
          height="500"
          className="lg:w-[600px] w-full"
        ></Image>

        <div className="w-full lg:w-[600px] space-y-3">
          <h2 className="text-4xl xl:text-[2.75rem] leading-12 font-[editorial] ">
            Get updates, offers & special invites.
          </h2>
          <p className="text-lg xl:text-[1.2rem] font-[area]">
            Join our newsletter & get 20% off your first order.
          </p>
          <NewsletterForm></NewsletterForm>
        </div>
      </div>
    </section>
  );
}
