import React, { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header></Header>
      {children}

      <Footer></Footer>
    </main>
  );
}
