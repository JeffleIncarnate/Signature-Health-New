"use client";

import "./header.scss";

import { usePathname } from "next/navigation";

import Navbar from "@/components/navbar/navbar";

const Header = () => {
  const path = usePathname();

  return (
    <>
      <header className="Header">
        <Navbar path={path} />
        <div className="OurTeam">
          <a
            href="/joinOurTeam"
            className={path === "/join-our-team" ? "nav__active" : ""}
          >
            Join Our Team
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
