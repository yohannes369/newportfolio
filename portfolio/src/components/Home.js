import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 15 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next.js and GraphQL.
          </p>

          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              onClick={() => alert("Portfolio clicked")}
            >
              Portfolio
            </button>
          </div>
        </div>

        <div>
          {/* You can add an image here later when ready */}
        </div>
      </div>
    </div>
  );
};

export default Home;
