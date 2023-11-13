import Image from "next/image";
import React from "react";

const project = [
  {
    img: "/fast.png",
    title: "Faster Pick-up",
    desc: "We have your contract already prepared.",
  },
  {
    img: "/secure.png",
    title: "Secured and Safe",
    desc: "Find the safest and finest ride.",
  },
  {
    img: "/better.png",
    title: "Better Service",
    desc: "We know you better, we serve you better.",
  },
];

const Hero = () => {
  return (
    <section>
      <div className="w-full h-[600px] bg-gray-100 custom-bg">
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 m-3 mt-[-60px] bg-blue-100 rounded-lg">
        {project.map((item) => (
          <div
            key={item.title}
            className="px-4 p-1 flex mx-auto text-center items-center rounded"
          >
            <Image
              src={item.img}
              width={110}
              height={0}
              alt="Image"
              className="mx-auto rounded-xl border border-gray-300 p-2"
            />
            <div className="p-3">
              <h2 className="font-bold text-slate-900 text-2xl py-3">
                {item.title}
              </h2>
              <p className="text-gray-600 font-sans md:pb-10">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
