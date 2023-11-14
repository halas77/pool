import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Help = () => {
  return (
    <section className="py-8 lg:py-10 md:px-10 max-sm:py-10 bg-blue-200 lg:mt-[-20px] m-5 rounded-b-lg">
      <div className="conatiner px-4 mx-auto">
        <div className="lg:flex justify-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0 md:p-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-7 text-slate-950 ">
              Pool{" "}
              <span className="border-b p-1 pr-10 border-slate-900"> tech </span>
            </h2>
            <p className="leading-relaxed text-slate-700  font-sans mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fuga
              necessitatibus placeat quia tempora libero blanditiis, vitae
              perspiciatis aspernatur provident est quas, inventore illum
              distinctio quae iste ut adipisci non doloribus nihil ipsam culpa
              voluptatem quis ad! Laboriosam consequatur ab voluptatum ducimus,
              ut dolor delectus! Ex, impedit alias hic ipsam totam itaque nisi
              enim amet? Ratione laborum quod rerum assumenda?
            </p>
            <div className="flex justify-start items-center mx-auto gap-3">
              <button className="flex text-[16px] max-md:my-3 py-3 px-8 bg-sky-900 text-gray-50 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out hover:bg-blue-200 border hover:border-sky-900 hover:text-slate-900 relative top-0">
                <Link href="/">Learn more</Link>
              </button>
              <button className="flex text-[16px] max-md:my-3 py-3 px-8 text-slate-900 max-md:text-lg font-bold font-sans rounded-full duration-300 transition-all ease-in-out border border-sky-900 hover:bg-sky-900 relative top-0 hover:text-slate-50 ">
                <Link href="/">Learn more</Link>
              </button>
            </div>
          </div>
          <div className="lg:w-6/12">
            <Image
              src={"/poolhelp.png"}
              width={600}
              height={50}
              alt="Image"
              className="lg:w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
