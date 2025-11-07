"use client";

import React, { ReactNode, Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/provider/cart.provider";
import { CustomerStore } from "@/store/customer.store";
import { CartStore } from "@/store/cart.store";
import { HeaderProvider } from "@/provider/header.provider";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomerStore>
        <CartStore>
          <CartProvider>
            <HeaderProvider>
              <main>
                <Header />
                {children}
                <Footer />
              </main>
            </HeaderProvider>
          </CartProvider>
        </CartStore>
      </CustomerStore>
    </Suspense>
  );
}
