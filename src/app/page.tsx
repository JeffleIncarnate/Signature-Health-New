import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Signature Health",
};

import Header from "@/components/header/header";
import HomeMain from "@/components/homeMain/homeMain";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeMain />
      <Footer />
    </>
  );
}
