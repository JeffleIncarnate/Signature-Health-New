import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Signature Health",
};

import AboutMain from "@/components/aboutMain/aboutMain";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function About() {
  return (
    <>
      <Header />
      <AboutMain />
      <Footer />
    </>
  );
}
