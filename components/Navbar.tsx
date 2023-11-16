"use client";

import { nav_links } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaArrowRight,
} from "react-icons/fa";
import Chat from "./Chat";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };
  return (
    <>
      <motion.header
        className="top-0 left-0 w-full py-2 lg:py-3 md:px-8 px-4 bg-sky-700 fixed z-[9999]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo  */}
            <div className="xl:pl-20">
              <Link href="/">
                <Image src="/Pool_logo.png" width={80} height={20} alt="Logo" />
              </Link>
            </div>
            {/* Navigation Menu  */}

            <div className="hidden lg:block">
              <ul className="flex space-x-12 font-sans">
                {nav_links.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-gray-50 border-b-2 border-slate-100 pb-1 font-extrabold"
                          : "text-gray-100 font-semibold hover:text-gray-50 hover:border-b hover:border-slate-100 pb-1 ease-in-out duration-105"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA  */}
            <div className="xl:pr-20">
              <Link href="/">
                <Image
                  src="/pool_call.png"
                  width={100}
                  height={20}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="lg:hidden">
              <button className="block lg:hidden" onClick={navHandle}>
                <HiBars3 size={35} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* for mobile oreintation  */}

      <motion.div
        className={
          nav
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
        initial={{ x: '-100vw' }}
        animate={{ x: nav ? 0 : '-50vw' }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="h-screen w-screen z-[9999] top-0 fiex bg-black bg-opacity-50"
          onClick={navHandle}
        ></div>
        <div className="bg-gray-100 w-[60%] top-0 left-0 z-[9999] h-screen fixed duration-300 ease-in-out">
          <div className="h-14 px-10 border-b flex items-center">
            <button className="flex items-center space-x-3" onClick={navHandle}>
              <GrClose size={20} />
              <span className="text-lg font-bold">Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 over-flow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {nav_links.map((item, index) => (
                <li key={item.key}>
                  <Link
                    onClick={navHandle}
                    href={item.href}
                    className="group text-lg text-semibold flex items-center p-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span className="font-semibold text-gray-900 pr-3 ">
                      {item.label}
                    </span>
                    <span className="left-0 relative duration-300 transition-all ease-in-out opacity-100">
                      <BiChevronRight size={15} className="text-gray-500" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <div className="flex mx-auto justify-center items-center my-10 p-4 gap-8">
                <Link href="">
                  <FaFacebook
                    size={22}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>
                <Link href="">
                  <FaTiktok
                    size={22}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>{" "}
                <Link href="">
                  <FaInstagram
                    size={22}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>{" "}
                <Link href="">
                  <FaTelegram
                    size={22}
                    className="text-sky-950 hover:text-gray-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="hidden lg:flex fixed flex-col top-[35%] left-0 z-[9999]"
        initial={{ x: '-50px', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] p-2 hover:ml-[0px] duration-300 bg-sky-700">
            <a
              className="flex justify-between items-center w-full text-gray-50 font-bold"
              href="/"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] p-2 hover:ml-[0px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-50 font-bold"
              href="/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] p-2 hover:ml-[0px] duration-300 bg-sky-500">
            <a
              className="flex justify-between items-center w-full text-gray-50 font-bold"
              href="/"
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-110px] p-2 hover:ml-[0px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-50 font-bold"
              href="/"
            >
              Tiktok <FaTiktok size={30} />
            </a>
          </li>
        </ul>
      </motion.div>

      <Chat />
    </>
  );
};

export default Navbar;
