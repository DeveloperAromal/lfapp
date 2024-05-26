"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "./Button";

interface NavItemProps {
  href: string;
  children: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
    return () => {
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isMenuOpen]);

  return (
    <section className="pb-4">
      <nav className="backdrop-blur-md backdrop-brightness-40 h-20 w-full top-0 left-0 right-0 fixed z-50 lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center w-full px-5 lg:px-0">
          <Link href="/home">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={78}
                height={78}
                className="hidden lg:block pt-4"
              />
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={90}
                height={90}
                className="block lg:hidden pl-5"
              />
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 px-3 rounded-2xl focus:outline-none"
          >
            <div className="relative">
              <div
                className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-3.5" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-0.5 bg-white mb-2 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:gap-10 ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="lg:flex lg:items-center lg:gap-10">
          <NavItem href="/home">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          </ul>
          <div className="flex gap-2 lg:gap-10 lg:ml-auto lg:pr-10">
            <Button href="/auth/v1/login" title="LOGIN" className="bg-transparent py-3 px-5 text-lg" />
            <Button href="/auth/v1/signup" title="SIGN UP" />
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-80 z-40 flex flex-col items-center justify-center space-y-4">
          <NavItem href="/home">Home</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <div className="flex gap-2">
            <Button href="/auth/v1/login" title="Login" />
            <Button href="/auth/v1/signup" title="Sign up" />
          </div>
        </div>
      )}
    </section>
  );
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <li className="text-lg md:text-lg text-white hover:text-emerald-600 cursor-pointer">
      <Link href={href}>{children}</Link>
    </li>
  );
}
