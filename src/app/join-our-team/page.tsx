import type { Metadata } from "next";

import JoinOurTeam from "@/components/join-our-team/join-our-team";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Join Our Team | Signature Health",
};

export default function JoinOurTeamPage() {
  return (
    <>
      <Header />
      <JoinOurTeam />
      <Footer />
    </>
  );
}
