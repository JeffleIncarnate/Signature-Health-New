"use client";

import "./header.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Navbar from "@/components/navbar/navbar";

const Header = () => {
  const path = usePathname();

  return (
    <>
      <header className="Header">
        <Navbar path={path} />
        <div className="OurTeam">
          <Link
            href={"join-our-team"}
            className={path === "/join-our-team" ? "nav__active" : ""}
          >
            Join Our Team
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
