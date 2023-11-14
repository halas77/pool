"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";

const page = () => {
  return (
    <section className="py-28 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20"></div>
          <div className="lg:w-6/12 relative z-10">
            <h2 className="text-heading font-sans text-2xl lg:text-4xl font-bold mb-5">
              More About Us
            </h2>

            <p className="text-gray-700 font-sans leading-relaxed mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui eaque cupiditate quidem nihil neque deserunt
              fugiat perferendis consequatur velit. Veniam nesciunt debitis
              voluptas laboriosam facere minus ex quod suscipit ipsa dicta,
              nulla eius commodi quibusdam. Incidunt obcaecati nisi rem non
              laboriosam natus sed soluta in ipsam, quod consequatur.
              Reprehenderit molestias sit amet animi cumque dolorem eum ipsum
              mollitia ipsa. Omnis maiores corrupti necessitatibus quas porro
              aut sit, accusamus enim suscipit fugiat ut quos illum deserunt
              odio nulla adipisci impedit. Dolorem, harum odit minima nisi et
              reiciendis dolorum quam accusamus voluptatibus nam, facere vero,
              laboriosam ex quas adipisci magnam rerum!
            </p>

            <div className="flex max-md:flex-col md:space-x-3 text-center items-center justify-center mx-auto">
              <Link
                href="/"
                className="text-[16px] max-md:my-3 py-4 px-14 border-2 border-sky-900 text-gray-900 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 hover:shadow-lg inline-block relative top-0"
              >
                Our services
              </Link>
              <Link
                href="/"
                className="text-[16px] max-md:mb-3 py-4 px-14 max-md:text-lg bg-sky-900 text-gray-50 font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 border hover:border-sky-50 hover:shadow-lg inline-block relative top-0"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex space-x-10 items-center justify-center lg:mt-14 max-md:pt-8">
              <Link href="" className="border border-sky-200 rounded-md p-3">
                <FaFacebook
                  size={30}
                  className="text-sky-800 hover:text-sky-500"
                />
              </Link>
              <Link href="" className="border border-sky-200 rounded-md p-3">
                <FaInstagram
                  size={30}
                  className="text-black hover:text-sky-800"
                />
              </Link>
              <Link href="" className="border border-sky-200 rounded-md p-3">
                <FaTelegram
                  size={30}
                  className="text-teal-600 hover:text-sky-800"
                />
              </Link>
              <Link href="" className="border border-sky-200 rounded-md p-3">
                <FaTiktok
                  size={30}
                  className="text-black hover:text-sky-800"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
