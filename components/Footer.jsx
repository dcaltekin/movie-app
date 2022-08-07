import React from "react";

function Footer() {
  return (
    <div>
      <footer className=" text-white py-6 md:px-16 px-4 flex flex-col items-center justify-center bg-black mt-16">
        <div className="md:pl-3 md:border-l border-white mb-6">
          <p className="opacity-75">The Movie App</p>
          <h3 className="md:text-6xl text-3xl font-sans font-bold mb-4">
            Send E-mail
          </h3>

          <form action="#">
            <div className="flex items-center justify-start flex-wrap">
              <input
                type="email"
                className="text-white border bg-transparent py-3 leading-tight px-4  w-full"
                placeholder="Enter your message here*"
              />
              <input
                type="submit"
                className="py-3 bg-blue-500 px-8 items-center mt-2 w-full cursor-pointer"
                value="Send"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center justify-start flex-wrap">
          <p className="opacity-75 text-sm md:mb-0 mb-3">
            &copy; 2022 By Doğukan Çaltekin.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
