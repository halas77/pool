"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const services = {
  heading: {
    heading: "Our Services",
    desc:"A high-quality taxi service is not just about transportation; it's about creating an experience. Here's a quality statement for a taxi company that focuses on exceptional service"
  },
  items: [
    {
      icons: "/safty.png",
      title: "Reliability and Safety",
      desc: "Always available and on time and Ensuring passenger safety as the top priority. ",
    },
    {
      icons: "/comfort.png",
      title: "Comfort",
      desc: "Offering comfortable and well-maintained vehicles",
    },
    {
      icons: "/Professionalism.png",
      title: "Professionalism",
      desc: "Polite, knowledgeable, and courteous drivers.",
    },

    {
      icons: "/convenience.png",
      title: "Convenience",
      desc: "Easy booking, flexible services, and multiple payment options.",
    },
    {
      icons: "/custumer.png",
      title: "Customer Service",
      desc: "Attentive and responsive to customer needs.",
    },

    {
      icons: "/personalized.png",
      title: "Personalized Experience",
      desc: "Tailoring services to individual preferences.",
    },
  ],
};

const Services = () => {
  return (
    <section className="py-8 bg-[#243238]">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-2xl lg:text-4xl font-bold mb-3">
            Why You{" "}
            <span className="border-b-2 font-sans border-sky-100 pr-10">
              Choose Us
            </span>
          </h2>
          {services.heading.heading && (
            <p className="text-sky-100 leading-relaxed mb-7 text-md font-sans">
              {services.heading.desc}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:p-12">
          {services.items.map((item, index) => (
            <div className="flex space-x-10" key={item.title}>
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-2xl bg-sky-100">
                  <Image src={item.icons} width={50} height={50} alt="Image" />
                </span>
              </div>
              <div>
                {item.title && (
                  <h3 className="text-sky-200 font-bold text-lg mb-3">
                    {item.title}
                  </h3>
                )}
                {item.desc && (
                  <p className="leading-relaxed text-gray-300 text-sm font-sans">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex items-center justify-center max-md:mt-10">
          <Link
            href="/"
            className="text-sky-200 font-sans font-semibold duration-300 transition-all ease-in-out py-3 px-6 flex border border-gray-400 rounded-full space-x-3 items-center hover:border-gray-200"
          >
            More about us
            <span className="text-gray-200 text-xl pl-2">|</span>
            <span className="bg-sky-50 rounded-full w-6 h-6 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-slate-900" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
