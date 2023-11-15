import React, { useState } from "react";
import { MdSupportAgent } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Chat = () => {
  const [chat, setChat] = useState(false);
  const handleChat = () => {
    setChat(!chat);
  };

  return (
    <>
      <div className="hidden lg:flex flex-col fixed top-[80%] right-10 z-[9999]">
        <div
          className={
            !chat
              ? "hidden"
              : "fixed top-56 rounded-lg right-20 bg-gray-100 h-[400px] w-[300px] shadow-lg border"
          }
        >
          <div className="bg-sky-700 justify-start px-4 py-3">
            <p className="text-lg font-sans font-bold text-white">
                Live Chat
            </p>
          </div>
          <div className="flex flex-col justify-end items-start w-full h-full mt-[-50px]">
            <input
              type="text"
              className="w-full rounded-sm py-3 px-5 bg-gray-300  outline-none"
              placeholder="Type here"
            />
          </div>
        </div>
        <button
          className="p-4 flex justify-between items-center duration-300 bg-sky-700 hover:bg-sky-900 rounded-full"
          onClick={handleChat}
        >
          <div className="text-white">
            {!chat ? <MdSupportAgent size={40} /> : <FaTimes size={30} />}
          </div>
        </button>
      </div>
    </>
  );
};

export default Chat;
