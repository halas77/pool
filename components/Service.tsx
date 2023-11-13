import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const projectContent = [
  {
    img: "/img1.png",
    title: "POOL",
    seats: "4",
    suitecase: "2",
    desc: "Economy rides offer optimal daily transportation, allowing convenient group travel by accommodating up to four friends.",
  },
  {
    img: "/img2.png",
    title: "SUV/MINIVAN",
    seats: "6/7",
    suitecase: "2",
    desc: "Most families visiting places with small family sizwe, pick mini vans for safe yet luxurious trips to places like parks with your family.",
  },
  {
    img: "/img3.png",
    title: "MiniBus",
    seats: "12/15",
    suitecase: "5",
    desc: "A van or a minivan ride gives you legroom & luggage space that other car categories don't. On the basis of seating capacity, they are classified as 12 to 15-passenger van and minivan contrat.",
  },
];

const Service = () => {
  return (
    <section className="py-10 bg-white overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center items-center mb-8">
          <div className="mb-5 lg:mb-0 max-w-3xl">
            <h2 className="text-gray-900 text-2xl lg:text-4xl font-bold mb-4 text-center font-sans">
              Available{" "}
              <span className="border-b-2 border-sky-600 pr-10">Services</span>
            </h2>
          </div>
        </div>
        <div className="rounded-xl w-full md:px-16 grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center justify-center">
          {projectContent.map((item, index) => (
            <div
              key={item.title}
              className="shadow-md bg-white p-5 pb-5 flex flex-col mx-auto text-center rounded-md ease-in-out duration-300 lg:w-[450px] lg:h-[500px]"
            >
              <Image
                src={item.img}
                width={500}
                height={30}
                alt="Project Image"
                className="mx-auto md:w-[400px] md:h-[175px]"
              />
              <h2 className="font-extrabold font-sans text-gray-900 text-xl pt-4">
                {item.title}
              </h2>
              <div className="flex justify-center items-center pt-4 gap-4">
                <p className="flex">
                  <Image
                    src="/seat.png"
                    width={20}
                    height={30}
                    alt="Project Image"
                    className="mx-3"
                  />
                  <span className="text-sm">Seats: {item.seats}</span>
                </p>

                <p className="flex">
                  <Image
                    src="/suitcase.png"
                    width={20}
                    height={30}
                    alt="Project Image"
                    className="mx-3"
                  />
                  <span className="text-sm">Suitecase: {item.suitecase}</span>
                </p>

                
              </div>
              <p className="text-gray-700 font-sans text-md pt-5">{item.desc}</p>
              <div className="mx-auto flex items-center justify-center mt-2 lg:mt-10 ">
                <Link
                  href="/projects"
                  className="bg-sky-900 hover:bg-sky-700 text-white font-sans font-semibold duration-300 transition-all ease-in-out py-2 max-md:mt-4 px-5 flex border rounded-full space-x-3 items-center hover:border-gray-500 border-gray-300"
                >
                  Book now
                  <span className="text-gray-50 text-2xl pl-2">|</span>
                  <span className="bg-sky-50 rounded-full w-8 h-8 flex items-center justify-center">
                    <BiChevronRight className="w-6 h-6 text-sky-950" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
