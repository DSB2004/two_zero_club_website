import React, { ReactNode } from "react";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <Header></Header>
        {children}
        <Newsletter></Newsletter>
        <Footer></Footer>
      </main>
    </>
  );
}
