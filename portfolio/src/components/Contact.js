// import React, { useCallback } from "react";
// import { motion } from "framer-motion";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Contact = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <div
//       name="contact"
//       className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative flex items-center justify-center overflow-hidden"
//     >
//       {/* ===== Particle Background ===== */}
//       <Particles
//         init={particlesInit}
//         className="absolute inset-0 z-0"
//         options={{
//           fullScreen: { enable: false },
//           interactivity: {
//             events: {
//               onHover: {
//                 enable: true,
//                 mode: "bubble", // Particles bubble around cursor
//               },
//             },
//             modes: {
//               bubble: {
//                 distance: 100,
//                 size: 6,
//                 duration: 0.3,
//                 opacity: 0.8,
//               },
//             },
//           },
//           particles: {
//             color: { value: "#06b6d4" },
//             move: {
//               enable: true,
//               speed: 1.5,
//               direction: "none",
//               random: true,
//             },
//             opacity: { value: 0.5 },
//             size: { value: 2, random: true },
//             number: { density: { enable: true, area: 800 }, value: 60 },
//           },
//         }}
//       />

//       {/* ===== Top Glow Line ===== */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent z-20"></div>

//       {/* ===== Main Content Container ===== */}
//       <motion.div 
//         className="w-full max-w-6xl mx-auto h-[90vh] relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 z-10"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {/* Corner Accents */}
//         {["tl", "tr", "bl", "br"].map((corner) => (
//           <motion.div
//             key={corner}
//             className={`absolute ${corner.includes('t') ? 'top-0' : 'bottom-0'} ${corner.includes('l') ? 'left-0' : 'right-0'} w-4 h-4 border-${corner.includes('t') ? 't' : 'b'} border-${corner.includes('l') ? 'l' : 'r'} border-cyan-400/70 rounded-${corner}-xl`}
//             initial={{ opacity: 0, x: corner.includes('l') ? -10 : 10, y: corner.includes('t') ? -10 : 10 }}
//             animate={{ opacity: 1, x: 0, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           />
//         ))}

//         {/* Content Grid */}
//         <div className="flex flex-col md:flex-row justify-between h-full w-full p-6 md:p-10 relative z-10">
//           {/* Left Column - Contact Info */}
//           <motion.div 
//             className="w-full md:w-1/2 pr-0 md:pr-10 flex flex-col justify-center"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <div className="pb-8">
//               <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
//                 Get In Touch
//               </p>
//               <motion.p 
//                 className="py-6 text-gray-300 text-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//               >
//                 Let's create something extraordinary!
//               </motion.p>
//               <motion.p 
//                 className="text-gray-400 mb-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//               >
//                 Whether for collaboration or just to say hi, I'll get back to you ASAP.
//               </motion.p>
//             </div>

//             <motion.div 
//               className="space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.9, duration: 0.8 }}
//             >
//               {[
//                 { icon: 'phone', text: '+1 (234) 567-8900' },
//                 { icon: 'mail', text: 'hello@example.com' },
//                 { 
//                   icon: 'linkedin', 
//                   text: 'LinkedIn', 
//                   link: 'https://linkedin.com' 
//                 },
//                 { 
//                   icon: 'github', 
//                   text: 'GitHub', 
//                   link: 'https://github.com' 
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center group"
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
//                 >
//                   <Icon name={item.icon} className="w-5 h-5 text-cyan-400 mr-3" />
//                   {item.link ? (
//                     <a 
//                       href={item.link} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="hover:text-cyan-400 transition-colors"
//                     >
//                       {item.text}
//                     </a>
//                   ) : (
//                     <span>{item.text}</span>
//                   )}
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div 
//               className="mt-auto pt-8 text-gray-500 text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.3, duration: 0.8 }}
//             >
//               © {new Date().getFullYear()} All rights reserved
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Contact Form */}
//           <motion.div 
//             className="w-full md:w-1/2 flex flex-col justify-center"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <form
//               action="https://getform.io/f/your-form-id"
//               method="POST"
//               className="space-y-6"
//             >
//               {[
//                 { name: 'name', label: 'Name', type: 'text' },
//                 { name: 'email', label: 'Email', type: 'email' },
//                 { name: 'message', label: 'Message', type: 'textarea' },
//               ].map((field, index) => (
//                 <motion.div
//                   key={field.name}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
//                 >
//                   <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-1">
//                     {field.label}
//                   </label>
//                   {field.type === 'textarea' ? (
//                     <textarea
//                       name={field.name}
//                       id={field.name}
//                       rows="6"
//                       placeholder={`Your ${field.label.toLowerCase()}`}
//                       className="w-full p-3 bg-gray-800/70 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300"
//                       required
//                     />
//                   ) : (
//                     <input
//                       type={field.type}
//                       name={field.name}
//                       id={field.name}
//                       placeholder={`Your ${field.label.toLowerCase()}`}
//                       className="w-full p-3 bg-gray-800/70 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300"
//                       required
//                     />
//                   )}
//                 </motion.div>
//               ))}

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.9, duration: 0.5 }}
//               >
//                 <motion.button
//                   type="submit"
//                   className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 flex items-center justify-center rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all group"
//                   whileHover={{ 
//                     scale: 1.02,
//                     boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Send Message
//                   <ArrowIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                 </motion.button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Helper Components
// const Icon = ({ name, className }) => {
//   const icons = {
//     phone: (
//       <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//       </svg>
//     ),
//     mail: (
//       <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//       </svg>
//     ),
//     linkedin: (
//       <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//     github: (
//       <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//         <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
//       </svg>
//     ),
//   };

//   return icons[name] || null;
// };

// const ArrowIcon = ({ className }) => (
//   <svg className={className} viewBox="0 0 20 20" fill="currentColor">
//     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//   </svg>
// );

// export default Contact;
import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        form.current,
        "user_id"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-20 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500 pb-1">
            Contact
          </h2>
          <p className="py-6 text-lg text-gray-300">
            Submit the form below or reach out through my social media
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-gray-300">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll get back to you as soon as
                possible!
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-3xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-3xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-3xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-300 hover:text-white transition-colors text-3xl"
                >
                  <HiOutlineMail />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;