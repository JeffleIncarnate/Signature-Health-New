import type { Metadata } from "next";

import Header from "@/components/header/header";
import HomeMain from "@/components/home-main/home-main";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Home | Signature Health",
};

export default function Home() {
  return (
    <>
      <Header />
      <HomeMain />
      <Footer />
    </>
  );
}
