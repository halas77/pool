"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <section className="py-28 lg:py-32 bg-sky-700 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container px-4 lg:px-12 mx-auto">
          <div className="lg:flex space-x-2 justify-between">
            <div className="hidden lg:w-6/12 relative z-10 lg:flex justify-start items-start m-4">
              <Image
                src={"/poolhelp.png"}
                width={600}
                height={200}
                alt="Image"
              />
            </div>
            <div className="lg:w-6/12 relative z-10">
              <h2 className="text-sky-50 font-sans text-2xl lg:text-4xl font-bold mb-5 border-b-sky-200">
                More About Us
              </h2>

              <p className="text-gray-100 font-sans text-md mb-10 lg:max-w-2xl">
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

              <div className="">
                <h2 className="text-sky-200 font-sans text-xl lg:text-2xl font-bold mb-5 border-b-sky-200">
                  Goal
                </h2>
                <p className="text-gray-100 font-sans text-md mb-10 lg:max-w-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime quia tempora sunt ipsum itaque. Amet ratione
                  consectetur repellat, accusantium autem quas nam commodi est
                  cum. Corrupti porro quae iste nemo veritatis odio autem nihil
                  repudiandae, reiciendis qui sequi aperiam asperiores
                  praesentium exercitationem! Ab tempora nesciunt quas, illo,
                  ducimus molestias aliquid, atque explicabo voluptate fugiat
                  earum blanditiis veniam? Dolor sed enim molestiae, molestias
                  corrupti repellendus laudantium culpa inventore recusandae
                  suscipit quisquam.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex space-x-2 justify-between">
            <div className="lg:w-6/12 relative z-10">
              <h2 className="text-sky-200 font-sans text-xl lg:text-2xl font-bold mb-5 border-b-sky-200">
                Mission
              </h2>
              <p className="text-gray-100 font-sans text-md mb-10 lg:max-w-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quia tempora sunt ipsum itaque. Amet ratione consectetur
                repellat, accusantium autem quas nam commodi est cum. Corrupti
                porro quae iste nemo veritatis odio autem nihil repudiandae,
                reiciendis qui sequi aperiam asperiores praesentium
                exercitationem! Ab tempora nesciunt quas, illo, ducimus
                molestias aliquid, atque explicabo voluptate fugiat earum
                blanditiis veniam? Dolor sed enim molestiae, molestias corrupti
                repellendus laudantium culpa inventore recusandae suscipit
                quisquam.
              </p>
            </div>
            <div className="lg:w-6/12 relative z-10">
              <h2 className="text-sky-200 font-sans text-xl lg:text-2xl font-bold mb-5 border-b-sky-200">
                Vision
              </h2>
              <p className="text-gray-100 font-sans text-md mb-10 lg:max-w-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quia tempora sunt ipsum itaque. Amet ratione consectetur
                repellat, accusantium autem quas nam commodi est cum. Corrupti
                porro quae iste nemo veritatis odio autem nihil repudiandae,
                reiciendis qui sequi aperiam asperiores praesentium
                exercitationem! Ab tempora nesciunt quas, illo, ducimus
                molestias aliquid, atque explicabo voluptate fugiat earum
                blanditiis veniam? Dolor sed enim molestiae, molestias corrupti
                repellendus laudantium culpa inventore recusandae suscipit
                quisquam.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
