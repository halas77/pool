import React from "react";

const Form = () => {
  return (
    <div className="bg-sky-950 pb-6 rounded-lg ">
      <div className="grid md:grid-cols-2 gap-4 p-4 pt-6 m-3 mt-8">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-sky-100 text-sm font-sans outline-none"
        />
        <input
          type="email"
          required
          placeholder="Your Email"
          className="p-3 bg-sky-100 text-sm font-sans outline-none"
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-sky-100 text-sm font-sans outline-none mx-7 p-3">
          <input
            type="text"
            placeholder="Subject"
            className="bg-sky-100 text-sm font-sans outline-none w-full"
          />
        </div>
        <div className="mt-6 m-7">
          <textarea
            name=""
            id=""
            rows={8}
            placeholder="Message"
            className="bg-sky-100 w-full p-3 text-sm outline-none"
          />
        </div>
        <div className="flex justify-center mx-auto">
          <button className="bg-sky-100 hover:bg-sky-200 py-3 px-4 text-slate-900 rounded-md font-bold text-md font-sans ease-in-out duration-200">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
