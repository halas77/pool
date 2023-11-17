"use client"

import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-sky-400 to-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="bg-sky-100 bg-opacity-90 shadow-md rounded-md p-8 w-full md:w-96 pb-20 m-3">
          <i className="flex items-center justify-center">
            {" "}
            <FaUserCircle size={35} />{" "}
          </i>
          <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>
          <form className="flex flex-col space-y-4">
            <div className="flex items-center bg-gray-50 bg-opacity-70 rounded-md px-4 py-2">
              <MdEmail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none flex-1"
              />
            </div>
            <div className="flex items-center bg-gray-50 bg-opacity-70 rounded-md px-4 py-2">
              <RiLockPasswordFill className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-1"
              />
            </div>
            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Sign In
            </button>
          </form>
          <p className="text-gray-500 text-center mt-4">
            Not registered?{" "}
            <a href="/signup" className="text-blue-500 underline">
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
