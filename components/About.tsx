import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FaArrowRight} from "react-icons/fa"

const About = () => {
  return (
    <section className="py-8 lg:py-10 md:px-10 max-sm:py-6 bg-[#243238]">
      <div className="conatiner px-4 mx-auto">
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-6/12 lg:ml-20">
            <Image src={"/poolapp.png"} width={600} height={50} alt="Image" className="lg:w-[550px]"
            />
          </div>
          <div className="lg:w-5/12 mb-10 lg:mb-0 lg:p-10 py-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-7 text-gray-50 ">
              Pool{" "}
              <span className="border-b p-1 pr-10 border-sky-100"> tech </span>
            </h2>
            <p className="leading-relaxed text-gray-200 text-[18px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fuga
              necessitatibus placeat quia tempora libero blanditiis, vitae
              perspiciatis aspernatur provident est quas, inventore illum
              distinctio quae iste ut adipisci non doloribus nihil ipsam culpa
              voluptatem quis ad!
            </p>
            <button className="hover:ml-4 flex items-center text-[16px] max-md:my-3 py-3 px-8 bg-sky-900 text-gray-50 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-sky-700 hover:shadow-lg relative top-0">
              <Link href="/">Learn more</Link>
              <span className="ml-2 flex justify-center items-center"><FaArrowRight size={12}/></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
