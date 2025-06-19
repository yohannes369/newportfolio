

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.1 });

//   return (
//     <div
//       name="about"
//       className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center relative overflow-hidden"
//       ref={ref}
//     >
//       {/* 16:9 Aspect Ratio Container */}
//       <div className="w-full max-w-[160vh] h-[90vh] mx-auto relative">
//         {/* Border Frame (16:9) */}
//         <div className="absolute inset-0 border border-gray-700/50 rounded-lg pointer-events-none">
//           {/* Enhanced Corner Accents */}
//           <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg"></div>
//           <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-lg"></div>
//           <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg"></div>
//           <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg"></div>
//         </div>

//         {/* Content Container */}
//         <div className="h-full w-full flex flex-col justify-center p-8 sm:p-12 md:p-16">
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
//             transition={{ duration: 1.2, ease: [0.16, 0.77, 0.47, 0.97] }}
//             className="mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold pb-3 inline-block border-b-4 border-cyan-500">
//               About
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -80 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
//               transition={{ delay: 0.3, duration: 1, ease: [0.16, 0.77, 0.47, 0.97] }}
//               className="space-y-6"
//             >
//               <motion.p 
//                 className="text-xl text-gray-300 leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
//                 deserunt illum officiis perferendis neque quasi a recusandae
//                 necessitatibus. Blanditiis error iste, fugiat recusandae rerum
//                 molestiae aperiam asperiores nemo.
//               </motion.p>
//               <motion.p 
//                 className="text-xl text-gray-300 leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//               >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
//                 similique sint aspernatur praesentium explicabo ipsam, laboriosam
//                 culpa possimus.
//               </motion.p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 80 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
//               transition={{ delay: 0.5, duration: 1, ease: [0.16, 0.77, 0.47, 0.97] }}
//               className="space-y-6"
//             >
//               <motion.p 
//                 className="text-xl text-gray-300 leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ delay: 0.8, duration: 0.8 }}
//               >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
//                 similique sint aspernatur praesentium explicabo ipsam, laboriosam
//                 culpa possimus.
//               </motion.p>
//               <motion.p 
//                 className="text-xl text-gray-300 leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ delay: 1.0, duration: 0.8 }}
//               >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
//                 similique sint aspernatur praesentium explicabo ipsam, laboriosam
//                 culpa possimus.
//               </motion.p>
//             </motion.div>
//           </div>

//           {/* Decorative Elements */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 1.5, duration: 1 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm"
//           >
//             Scroll to explore
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const About = () => {
  const technologies = [
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <SiTypescript size={40} />, name: "TypeScript" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
    { icon: <FaDatabase size={40} />, name: "Databases" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500 pb-1">
            About
          </h2>
          <p className="py-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate Full Stack Developer with 5+ years of experience
              building web applications. I specialize in JavaScript technologies
              across the whole stack (React.js, Node.js, Express, MongoDB).
            </p>
            <p className="text-gray-300 mb-4">
              My journey in web development started when I was studying Computer
              Science. Since then, I've worked with startups and established
              companies to build scalable, performant, and user-friendly
              applications.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me hiking, reading tech blogs, or
              contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="text-cyan-400 mb-2">{tech.icon}</div>
                  <span className="text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;