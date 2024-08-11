import type { Metadata } from "next";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ServicesMain from "@/components/servicesMain/servicesMain";

export const metadata: Metadata = {
  title: "Services | Signature Health",
};

export default function Services() {
  return (
    <>
      <Header />
      <ServicesMain />
      <Footer />
    </>
  );
}
