import type { Metadata } from "next";

import ContactMain from "@/components/contact-main/contact-main";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Contact | Signature Health",
};

export default function Contact() {
  return (
    <>
      <Header />
      <ContactMain />
      <Footer />
    </>
  );
}
