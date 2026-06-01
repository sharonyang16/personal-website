"use client";
import Link from "next/link";
import { Typography } from "@/components/base";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import { nav } from "./data";

const Header = () => {
  return (
    <header className="w-full">
      <div className="py-8 flex lg:justify-between justify-center items-center">
        <Link href="/" aria-label="home page">
          <Logo className="w-12" />
        </Link>
        <div className="hidden lg:block">
          <div className="flex gap-8 items-center">
            <nav className="flex gap-8">
              {nav.map((link: string) => (
                <Link key={link} href={`/${link}`}>
                  <Typography intent={"label1"}>{link}</Typography>
                </Link>
              ))}
            </nav>
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
