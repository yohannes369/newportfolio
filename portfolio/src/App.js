

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/NavBar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Experience from "./components/Experience";
// // import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="flex flex-col min-h-screen bg-gray-900">
//         <Navbar />
//         <main className="flex-grow">
//           <Home />
//           <About />
//           <Experience />
//           {/* <Projects /> */}
//           <Contact />
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/NavBar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Experience from "./components/Experience";
// // import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-gray-900">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/experience" element={<Experience />} />
//             {/* <Route path="/projects" element={<Projects />} /> */}
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;