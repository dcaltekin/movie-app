import React from "react";

function Navbar() {
  return (
    <div className="">
      <header className="relative z-50 lg:overflow-hidden h-screen">
        <nav className="p-3 py-4 px-3 relative z-50 bg-slate-200 bg-opacity-10 shadow-2xl">
          <div className="container mx-auto flex flex-wrap items-center justify-start">
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-white font-bold">Logo</h1>
            </div>
            <ul className="flex items-center justify-start text-white">
              <li className="px-6 py-2 font-bold text-black">
                <a href="#">About Us</a>
              </li>
              <li className="px-6 py-2 font-bold text-black">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <div className="container mx-auto mt-48 lg:mt-52 lg:px-16 px-4 py-4">
          <div className="absolute inset-0 -z-50  opacity-60">
            <img
              src="doctorstrange.jpg"
              className="object-cover object-right-top lg:object-center w-full h-screen"
              alt="poster"
            />
          </div>

          <div className="pl-8 border-l border-white ">
            <p className="text-white font-bold tracking-wide text-base hidden lg:block leading-none">
              2022-05-04
            </p>
            <h1 className=" text-white inline-block  p-4 bg-black bg-opacity-50 rounded-lg md:text-6xl shadow-2xl text-3xl text-right sm:text-left font-bold font-sans m-0 leading-none">
              Doctor Strange
            </h1>
            <p className="text-white  font-bold p-4 bg-black bg-opacity-50 rounded-lg shadow-2xl lg:block text-lg md:max-w-lg w-full md:my-4">
              Doctor Strange, with the help of mystical allies both old and new,
              traverses the mind-bending and dangerous alternate realities of
              the Multiverse to confront a mysterious new adversary.
            </p>
          </div>
        </div>{" "}
      </header>
    </div>
  );
}

export default Navbar;
