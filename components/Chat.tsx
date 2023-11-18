import React, { useState } from "react";
import { MdSupportAgent } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

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
              : "fixed top-32 rounded-t-lg right-20 bg-gray-100 h-[500px] w-[350px] shadow-3xl"
          }
        >
          <div className="bg-sky-950 justify-start px-4 py-3 rounded-t-lg">
            <p className="text-lg font-sans font-bold text-white">Live Chat</p>
          </div>
          <div className="flex flex-col justify-end items-start w-full h-full mt-[-52px]">
            <div className="w-full flex bg-gray-300 justify-between items-center pr-4">
              <input
                type="text"
                className="w-full py-3 px-5 bg-gray-300 outline-none"
                placeholder="type here ..."
              />
              <button>
                <IoMdSend
                  size={35}
                  className="border bg-slate-900 text-sky-200 p-1 rounded"
                />
              </button>
            </div>
          </div>
        </div>
        <button
          className="p-4 flex justify-between items-center duration-300 bg-sky-900 hover:bg-sky-950 rounded-full"
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
