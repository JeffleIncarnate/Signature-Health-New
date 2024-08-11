import type { Metadata } from "next";

import AboutMain from "@/components/about-main/about-main";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "About | Signature Health",
};

export default function About() {
  return (
    <>
      <Header />
      <AboutMain />
      <Footer />
    </>
  );
}
