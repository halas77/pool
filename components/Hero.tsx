import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-sky-700 w-full h-[640px] flex items-center justify-center">
        <div className="container px-4 lg:pl-10 mx-auto">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-5/12 mb-10 lg:mb-0 lg:pt-6 xl:px-8 lg:ml-14">
              <span className="border-b border-sky-700 inline-block py-1 pr-5 font-sans text-sky-200 font-semibold relative mb-4 before:content-['']  before:bg-white before:absolute before:w-2/3 before:bottom-0 before:z-[-1] before:left-0 before:top-0">
                {" "}
                Your Journey, Our Priority.
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-sky-50 mb-7">
                Beyond Transportation, We Deliver Experiences.
              </h1>

              <p className="leading-relaxed text-gray-50 font-sans mb-7">
                Discover unparalleled convenience and comfort with Pool. Our
                fleet of reliable vehicles, coupled with professional drivers,
                ensures seamless journeys. Experience transportation redefined —
                where every ride is an effortless and enjoyable adventure. Your
                destination, our commitment. Book with us for a travel
                experience beyond the ordinary.
              </p>
              <div className="flex max-md:flex-col md:space-x-3 text-center ">
                <Link
                  href="/"
                  className="text-[16px] max-md:my-3 py-4 px-14 border-2 border-sky-200 text-gray-50 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Contact Us
                </Link>
                <Link
                  href="/"
                  className="text-[16px] max-md:mb-3 py-4 px-14 max-md:text-lg bg-sky-200 text-slate-900 font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-100 border hover:border-sky-200 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Download App
                </Link>
              </div>
            </div>
            <div className="lg:w-5/12">
              <Image
                src="/phone01.png"
                width={300}
                height={200}
                alt="Image"
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-10 md:flex bg-gray-200 max-md:pb-2">
        <div className="flex space-x-10">
          <div className="w-14 shrink-0 max-md:mb-5">
            <span className="inline-flex items-center justify-center w-[70px] h-[70px] ">
              <Image src={"/goal.jpg"} width={50} height={50} alt="Image" />
            </span>
          </div>
          <div className="max-w-md">
            <h3 className="text-slate-950 font-bold text-lg mb-1">Goal</h3>
            <p className="leading-relaxed text-gray-700 text-sm font-sans">
              Transforming travel with reliable, enjoyable, and efficient taxi
              services.
            </p>
          </div>
        </div>
        <div className="flex space-x-10  max-md:mb-5">
          <div className="w-14 shrink-0">
            <span className="inline-flex items-center justify-center w-[70px] h-[70px] ">
              <Image src={"/vision.png"} width={50} height={50} alt="Image" />
            </span>
          </div>
          <div className="max-w-md">
            <h3 className="text-slate-950 font-bold text-lg mb-1">Vision</h3>
            <p className="leading-relaxed text-gray-700 text-sm font-sans">
              Redefine transportation, setting new industry standards for
              convenience and delight.
            </p>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-14 shrink-0">
            <span className="inline-flex items-center justify-center w-[70px] h-[70px]">
              <Image src={"/mission.png"} width={50} height={50} alt="Image" />
            </span>
          </div>
          <div className="max-w-md">
            <h3 className="text-slate-950 font-bold text-lg mb-1">Mission</h3>
            <p className="leading-relaxed text-gray-700 text-sm font-sans">
              Prioritize safety, comfort, and satisfaction, connecting people to
              memorable journeys.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
