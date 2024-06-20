import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found bg-white flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
      <p className="text-4xl text-bold text-center mb-4 font-lora">
        The page you were looking for does not exist
      </p>
      <p className="text-2xl text-center font-lora pb-10">
        You may have mistyped the address or the page may have moved
      </p>
      <Link
        to="/"
        className="text-xl bg-yellow-400 hover:bg-yellow-300 hover:text-white text-white font-bold font-lora py-2 px-6 rounded-lg inline-block border-[#004686] border-solid border-2.5"
      >
        Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
