// // import React from "react";
// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import joImage from "./jo.jpg";
// // import { FaLinkedin, FaGithub } from "react-icons/fa";

// // const Home = () => {
// //   return (
// //     <section
// //       id="home"
// //       className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-20 px-4 overflow-hidden relative"
// //     >
// //       {/* Main content container */}
// //       <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-8 pb-16">
// //         {/* Profile Image with Enhanced Border */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="flex-1 flex justify-center order-1"
// //         >
// //           <div className="relative group border-4 border-emerald-400/50 rounded-2xl p-4 shadow-2xl">
// //             <motion.div
// //               whileHover={{ scale: 1.02 }}
// //               className="relative overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-lg transition-all duration-500"
// //             >
// //               <motion.img
// //                 initial={{ scale: 1.1 }}
// //                 animate={{ scale: 1 }}
// //                 transition={{ duration: 0.8 }}
// //                 src={joImage}
// //                 alt="Professional Headshot"
// //                 className="w-full h-full object-cover"
// //               />
// //             </motion.div>
// //             {/* Decorative corner elements */}
// //             <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg" />
// //             <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg" />
// //             <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg" />
// //             <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-emerald-400 rounded-br-lg" />
// //           </div>
// //         </motion.div>

// //         {/* Text Content */}
// //         <div className="flex-1 flex flex-col justify-center text-center lg:text-left order-2">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //             className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
// //           >
// //             Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-500"> Yohannes Yeneakal </span>
// //           </motion.h1>

// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.6, duration: 0.8 }}
// //             className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 h-14"
// //           >
// //             <TypeAnimation
// //               sequence={[
// //                 "Full Stack Developer",
// //                 2000,
// //                 "React Specialist",
// //                 2000,
// //                 "UI/UX Designer",
// //                 2000,
// //                 "Problem Solver",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={50}
// //               repeat={Infinity}
// //               className="text-gray-300"
// //             />
// //           </motion.div>

// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.8, duration: 0.8 }}
// //             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
// //           >
// //             I create exceptional digital experiences with cutting-edge web technologies, 
// //             focusing on responsive, performant, and accessible applications.
// //           </motion.p>

// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 1, duration: 0.8 }}
// //             className="flex flex-wrap gap-5 justify-center lg:justify-start"
// //           >
// //             <motion.a
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.98 }}
// //               href="#projects"
// //               className="px-10 py-4 text-lg bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50"
// //             >
// //               View Projects
// //             </motion.a>
// //             <motion.a
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.98 }}
// //               href="#contact"
// //               className="px-10 py-4 text-lg border-2 border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400/10 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30"
// //             >
// //               Contact Me
// //             </motion.a>
// //           </motion.div>
// //         </div>
// //       </div>

     
// //     </section>
// //   );
// // };

// // export default Home;
// import React from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import joImage from "./jo.jpg";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-20 px-4 overflow-hidden relative"
//     >
//       {/* Main content container with max-width for large screens */}
//       <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 pt-8 pb-16">
//         {/* Profile Image Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex-1 flex justify-center order-1"
//         >
//           {/* Image container with enhanced border styling */}
//           <div className="relative group border-4 border-emerald-400/50 rounded-2xl p-4 shadow-2xl">
//             {/* Image with hover effect */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="relative overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-lg transition-all duration-500"
//             >
//               <motion.img
//                 initial={{ scale: 1.1 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 src={joImage}
//                 alt="Professional Headshot"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//             {/* Decorative corner elements */}
//             <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg" />
//             <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg" />
//             <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg" />
//             <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-emerald-400 rounded-br-lg" />
//           </div>
//         </motion.div>

//         {/* Text Content Section - Increased left margin on desktop */}
//         <div className="flex-1 flex flex-col justify-center text-center lg:text-left order-2 lg:ml-8">
//           {/* Main heading with gradient text */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
//           >
//             Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-500">Yohannes Yeneakal</span>
//           </motion.h1>

//           {/* Animated typing text */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 h-14"
//           >
//             <TypeAnimation
//               sequence={[
//                 "Full Stack Developer",
//                 2000,
//                 "React Specialist",
//                 2000,
//                 "UI/UX Designer",
//                 2000,
//                 "Problem Solver",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="text-gray-300"
//             />
//           </motion.div>

//           {/* Description paragraph */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
//           >
//             I create exceptional digital experiences with cutting-edge web technologies, 
//             focusing on responsive, performant, and accessible applications.
//           </motion.p>

//           {/* Action buttons */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="flex flex-wrap gap-5 justify-center lg:justify-start"
//           >
//             <motion.a
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               href="#projects"
//               className="px-10 py-4 text-lg bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50"
//             >
//               View Projects
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               href="#contact"
//               className="px-10 py-4 text-lg border-2 border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400/10 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30"
//             >
//               Contact Me
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Home;
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import joImage from "./jo.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

/**
 * Home section component
 * Updated 2025‑06‑19
 * - Added extra top padding to move content down away from navbar
 * - Added Tailwind `space-y-*` utility for more consistent spacing between text blocks
 * - Tweaked individual margins to fine‑tune gaps
 */
const Home = () => {
  return (
    <section
      id="home"
      /* ADDED: Increased top padding (pt-28 md:pt-32) for better separation from navbar */
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-28 md:pt-32 px-4 overflow-hidden relative"
    >
      {/* Main content container with max-width for large screens */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 pb-16">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center order-1"
        >
          {/* Image container with enhanced border styling */}
          <div className="relative group border-4 border-emerald-400/50 rounded-2xl p-4 shadow-2xl">
            {/* Image with hover effect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-lg transition-all duration-500"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src={joImage}
                alt="Professional Headshot"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-emerald-400 rounded-br-lg" />
          </div>
        </motion.div>

        {/* Text Content Section */}
        {/* ADDED: `space-y-6` to distribute vertical spacing consistently */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left order-2 lg:ml-8 space-y-6">
          {/* Main heading with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-500">
              Yohannes Yeneakal
            </span>
          </motion.h1>

          {/* Animated roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            /* UPDATED: mb-2 keeps a modest gap from heading; rest handled by space-y-6 */
            className="text-3xl md:text-4xl lg:text-5xl font-medium"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Specialist",
                2000,
                "UI/UX Designer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-300"
            />
          </motion.div>

          {/* Short bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I create exceptional digital experiences with cutting‑edge web
            technologies, focusing on responsive, performant, and accessible
            applications.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-5 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-10 py-4 text-lg bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-10 py-4 text-lg border-2 border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400/10 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
