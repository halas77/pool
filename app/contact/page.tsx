"use client";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdEmail, MdCall, MdShare } from "react-icons/md";
import Link from "next/link";
import Form from "@components/Form";

const Contact = () => {
  return (
    <div className="w-full bg-white pt-5 lg:pt-24">
      <div className="mx-4 md:mx:24 lg:mx-32 my-12">
        <h1 className="font font-extrabold text-3xl font-sans mb-10">
          CONTACT{" "}
          <span className="font-sans border-b-2 border-sky-900 pb-1 pr-10">
            US
          </span>
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="bg-sky-950 rounded-lg px-4 flex items-center h-28">
            <div className="bg-sky-900 p-3 rounded-full">
              <i className="text-slate-50">
                <TiLocation size={28} />{" "}
              </i>
            </div>
            <div className="px-5">
              <h2 className="pb-2 text-xl font-sans font-bold text-gray-50">
                Our Address
              </h2>
              <p className="font-sans text-gray-300 text-sm">
                {" "}
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
          <div className="bg-sky-950 rounded-lg px-4 flex items-center h-28">
            <div className="bg-sky-900 p-3 rounded-full">
              <i className="text-slate-50">
                <MdEmail size={28} />{" "}
              </i>
            </div>
            <div className="px-5">
              <h2 className="pb-2 text-xl font-sans font-bold text-gray-50">
                Email Us
              </h2>
              <p className="font-sans text-gray-300 text-sm">
                {" "}
                poolitsolutions@gmail.com
              </p>
            </div>
          </div>
          <div className="bg-sky-950 rounded-lg px-4 flex items-center h-28">
            <div className="bg-sky-900 p-3 rounded-full">
              <i className="text-slate-50">
                <MdCall size={28} />{" "}
              </i>
            </div>
            <div className="px-5">
              <h2 className="pb-2 text-xl font-sans font-bold text-gray-50">
                Call Us
              </h2>
              <p className="font-sans text-gray-300 text-sm">
                {" "}
                +251 123 1234
              </p>
              <p className="font-sans text-gray-300 text-sm">
                {" "}
                +251 987 9876
              </p>
            </div>
          </div>

          <div className="bg-sky-950 rounded-lg p-4 flex items-center h-28 ">
            <div className="bg-sky-900 p-3 rounded-full">
              <i className="text-sky-50">
                <MdShare size={25} />{" "}
              </i>
            </div>
            <div className="p-5">
              <h2 className="pb-2 text-xl font-sans font-bold  text-gray-50">
                Social Links
              </h2>
              <div className="flex gap-3 ">
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-gray-300 hover:text-gray-50 ease-in-out duration-300">
                    <FaFacebook size={23} />
                  </div>
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-gray-300 hover:text-gray-50 ease-in-out duration-300">
                    <FaInstagram size={23} />
                  </div>
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-gray-300 hover:text-gray-50 ease-in-out duration-300">
                    <FaTelegram size={23} />
                  </div>
                </Link>

                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-gray-300 hover:text-gray-50 ease-in-out">
                    <FaTiktok size={23} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
