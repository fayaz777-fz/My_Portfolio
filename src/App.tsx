import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import heroEye from "@/assets/hero-eye.png";

import WelcomeScreen from "@/components/WelcomeScreen";
import FrontendDeveloperSection from "@/components/FrontendDeveloperSection";
import Showcase from "./components/Showcase";
import ContactSection from "@/components/ContactSection";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";


const logos = ["FAYAZ", "| SOFTWARE ", "ENGINEER |", "FULLSTACK", "DEVELOPER"];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [time, setTime] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const text = "FAYAZ";
  const [displayed, setDisplayed] = useState("");


  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showWelcome || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome, mobileMenu]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    function type() {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i < text.length) setTimeout(type, 200);
    }
    type();
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <AnimatePresence>{showWelcome && <WelcomeScreen />}</AnimatePresence>

          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-black/20 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/70 uppercase font-medium">
                FAYAZ · SOFTWARE ENGINEER
              </span>
            </div>
            <ul className="hidden md:flex items-center gap-10 text-xs tracking-widest text-white/70 uppercase">
              <li
                onClick={() =>
                  document.getElementById("Home")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </li>

              <li
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </li>

              <li
                onClick={() =>
                  document.getElementById("showcase")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Showcase
              </li>

              <li
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <div className="hidden md:block text-[10px] tracking-[0.3em] text-white/70 uppercase">
                {time}
              </div>
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white z-50"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>


          {mobileMenu && (
            <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white uppercase tracking-[0.3em] text-sm md:hidden">

              <div className="absolute top-30 text-center">
                <p className="text-[10px] text-white/40 tracking-[0.3em] mb-2">
                  TIME
                </p>

                <h2 className="text-2xl tracking-widest font-semibold">
                  {time}
                </h2>
              </div>

              <button
                onClick={() => {
                  document.getElementById("Home")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Home
              </button>

              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                About
              </button>

              <button
                onClick={() => {
                  document.getElementById("showcase")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Showcase
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Contact
              </button>

              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/fayaz777-fz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/15 transition-all duration-200"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://leetcode.com/u/shaik_mohammed_fayaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFA116]/10 border border-[#FFA116]/30 text-[#FFA116] hover:bg-[#FFA116]/20 transition-all duration-200"
                >
                  <SiLeetcode size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/shaik-mohammed-fayaz-4448672b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all duration-200"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          )}

          <section
            id="Home"
            className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] md:w-[48%] h-[80%] max-h-[680px] pointer-events-none flex items-center justify-end pr-4 md:pr-12">
              <div className="relative w-full h-full rounded-l-[120px] md:rounded-l-[200px] overflow-hidden border-l-2 border-y border-white/20 bg-gradient-to-b from-white/10 via-black/40 to-black shadow-2xl shadow-white/5 backdrop-blur-sm">
                <img
                  src={heroEye}
                  alt="Hero"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 pt-24 pb-10">
              <h1
                className="font-display uppercase leading-[0.85] tracking-[-0.03em] text-[22vw] md:text-[14vw] lg:text-[13rem] text-white transition-all duration-300"
              >
                {displayed || "\u00A0"}
              </h1>

              <div className="mt-8 md:mt-12 space-y-2">
                <p className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug font-[Poppins] font-semibold tracking-wide text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-white via-white/70 to-white animate-[shine_4s_linear_infinite]">
                  Building Scalable Software Systems.
                </p>
                <p className="text-left text-xs sm:text-sm md:text-base font-mono tracking-widest text-white/70 flex items-center gap-2">
                  <span className="text-white/40 font-bold">&rarr;</span> Building modern web experiences
                </p>
                <p className="text-left text-xs sm:text-sm md:text-base font-mono tracking-widest text-white/70 flex items-center gap-2">
                  <span className="text-white/40 font-bold">&rarr;</span> Solving real-world problems with technology
                </p>
              </div>

              {/* Social Icons — between taglines and PASSIONATE text */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://github.com/fayaz777-fz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/80 hover:text-white hover:bg-white/15 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/shaik-mohammed-fayaz-4448672b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/shaik_mohammed_fayaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFA116]/10 border border-[#FFA116]/30 text-[#FFA116] hover:bg-[#FFA116]/20 hover:scale-110 transition-all duration-300"
                >
                  <SiLeetcode size={16} />
                </a>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-auto">
                <p className="relative text-sm sm:text-base lg:text-2xl leading-relaxed max-w-md font-[cursive] italic font-semibold tracking-wider text-white">
                  PASSIONATE COMPUTER SCIENCE ENGINEERING STUDENT
                </p>

              </div>
            </div>
          </section>

          <div className="bg-black border-t border-white/10 py-5 overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>


          <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>

          <section id="about">
            <FrontendDeveloperSection />
          </section>
          <section id="showcase">
            <Showcase />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      } 
    />

      <Route path="/about" element={<About />} />
    </Routes>

  );
}