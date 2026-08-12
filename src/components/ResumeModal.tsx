import { motion } from "framer-motion";
import { X, Download, FileText, ExternalLink, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHAIK MOHAMMED FAYAZ - Resume</title>
    <style>
        @page {
            size: A4;
            margin: 12mm 15mm;
        }
        body {
            font-family: 'Times New Roman', Times, serif;
            color: #111;
            line-height: 1.45;
            margin: 0;
            padding: 20px;
            background: #fff;
        }
        .header {
            text-align: center;
            margin-bottom: 16px;
            border-bottom: 2px solid #111;
            padding-bottom: 12px;
        }
        .name {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 6px;
        }
        .contact {
            font-size: 11px;
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            color: #333;
        }
        .contact a {
            color: #0b57d0;
            text-decoration: none;
            font-weight: 500;
        }
        .section-title {
            font-size: 13px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            border-bottom: 1.5px solid #222;
            margin-top: 16px;
            margin-bottom: 10px;
            padding-bottom: 3px;
            font-family: Arial, Helvetica, sans-serif;
            color: #000;
        }
        p {
            margin: 4px 0;
            font-size: 12px;
        }
        ul {
            margin: 4px 0 8px 0;
            padding-left: 20px;
            font-size: 12px;
        }
        li {
            margin-bottom: 4px;
        }
        .bold {
            font-weight: bold;
        }
        .flex-between {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 12px;
            margin-bottom: 4px;
        }
        .cert-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            margin-bottom: 5px;
        }
        .cert-row a {
            color: #0b57d0;
            text-decoration: none;
            font-family: Arial, sans-serif;
            font-size: 11px;
        }
        @media print {
            body { padding: 0; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">SHAIK MOHAMMED FAYAZ</div>
        <div class="contact">
            <a href="https://github.com/fayaz777-fz" target="_blank">GitHub</a> • 
            <a href="https://www.linkedin.com/in/shaik-mohammed-fayaz-4448672b3/" target="_blank">LinkedIn</a> • 
            <a href="https://leetcode.com/u/shaik_mohammed_fayaz/" target="_blank">LeetCode</a> • 
            <a href="mailto:mfshaik03@gmail.com">mfshaik03@gmail.com</a> • 
            <span>+91 9182622928</span>
        </div>
    </div>

    <div class="section-title">CAREER OBJECTIVE</div>
    <p>Driven Computer Science Engineering student with strong proficiency in Data Structures Algorithms and Object-Oriented Programming. Possessing knowledge of Java and MySQL, and motivated to excel in fast-paced technology environments.</p>

    <div class="section-title">TECHNICAL SKILLS</div>
    <ul>
        <li><span class="bold">Programming Languages:</span> Java</li>
        <li><span class="bold">Backend:</span> Node.js, Spring Boot</li>
        <li><span class="bold">Frontend:</span> ReactJS, HTML, CSS</li>
        <li><span class="bold">Databases:</span> MySQL, MongoDB</li>
        <li><span class="bold">Concepts:</span> Data Structures & Algorithms, OOP, REST APIs</li>
        <li><span class="bold">Tools:</span> Git, VS Code, Java Eclipse, Intellij</li>
    </ul>

    <div class="section-title">PROJECTS</div>
    <p class="bold">VAHAAN BAZAAR (Website) – Full-Stack Web Application</p>
    <ul>
        <li>Developed using React.js, Node.js, and MongoDB.</li>
        <li>Implemented backend APIs and database operations, Deployed on Vercel for reliable accessibility.</li>
    </ul>

    <p class="bold">KONDAVEEDU (App) – Historical Tourism Mobile Application</p>
    <ul>
        <li>Developed a tourism app promoting Kondaveedu Fort, Implemented using Flutter with structured and user-friendly interface.</li>
        <li>Published on Google Play Store under college domain, Represented with Palnadu's District Collector</li>
    </ul>

    <p class="bold">PORTFOLIO (Website) – Personal Portfolio Site</p>
    <ul>
        <li>Designed and developed a responsive personal portfolio website showcasing skills, projects, education, certifications, and technical experience.</li>
        <li>Implemented a responsive user interface with smooth animations for an engaging user experience.</li>
    </ul>

    <div class="section-title">EDUCATION</div>
    <div class="flex-between">
        <span><span class="bold">2026</span> BTech (CSE) - Narasaraopeta Engineering College</span>
        <span class="bold">(CGPA: 8.2)</span>
    </div>
    <div class="flex-between">
        <span><span class="bold">2023</span> Class 12 – Sri Chaitanya Junior College</span>
        <span class="bold">(8.6)</span>
    </div>
    <div class="flex-between">
        <span><span class="bold">2021</span> Class 10 – St. Joseph's High School</span>
        <span class="bold">(9.7)</span>
    </div>

    <div class="section-title">INTERNSHIP</div>
    <p><span class="bold">DataValley Remote Java Full Stack Intern (May 2026 – Jul 2026)</span> – Successfully completed an Online Java Full Stack Development in collaboration with APSCHE</p>
    <ul>
        <li>Gained hands-on experience in Core Java, JSP, Spring Boot, HTML, CSS and MySQL.</li>
    </ul>

    <div class="section-title">CERTIFICATIONS</div>
    <div class="cert-row">
        <span>Introduction to Internet of Things <span class="bold">(NPTEL)</span></span>
        <a href="https://github.com/fayaz777-fz/My_Portfolio" target="_blank">View Certificate</a>
    </div>
    <div class="cert-row">
        <span>Generative AI by Google Cloud</span>
        <a href="https://github.com/fayaz777-fz/My_Portfolio" target="_blank">View Certificate</a>
    </div>

    <script>
        window.onload = function() {
            window.print();
        };
    </script>
</body>
</html>
    `;

    const printWin = window.open("", "_blank");
    if (printWin) {
      printWin.document.write(resumeHTML);
      printWin.document.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-4xl h-[92vh] max-h-[900px] bg-zinc-900 border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/60 backdrop-blur-xl shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Resume Preview
              </h2>
              <p className="text-[10px] text-white/50 hidden sm:block">
                SHAIK MOHAMMED FAYAZ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white text-black font-bold text-[11px] sm:text-xs tracking-wider uppercase hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 bg-zinc-950 flex justify-center items-start scrollbar-thin scrollbar-thumb-white/20">
          <div className="w-full max-w-[760px] bg-white text-zinc-900 p-5 sm:p-8 md:p-11 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-md sm:rounded-lg font-serif leading-relaxed text-xs sm:text-sm my-auto">
            {/* Resume Header */}
            <div className="text-center border-b-2 border-zinc-900 pb-4 mb-5">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-zinc-900 uppercase mb-2 font-sans">
                SHAIK MOHAMMED FAYAZ
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-sans text-zinc-700">
                <a
                  href="https://github.com/fayaz777-fz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 font-medium transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                
                <span className="text-zinc-300 hidden sm:inline">•</span>

                <a
                  href="https://www.linkedin.com/in/shaik-mohammed-fayaz-4448672b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 font-medium transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <span className="text-zinc-300 hidden sm:inline">•</span>

                <a
                  href="https://leetcode.com/u/shaik_mohammed_fayaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-orange-500 font-medium transition-colors"
                >
                  <SiLeetcode className="w-3.5 h-3.5 text-[#FFA116]" />
                  <span>LeetCode</span>
                </a>

                <span className="text-zinc-300 hidden sm:inline">•</span>

                <a
                  href="mailto:mfshaik03@gmail.com"
                  className="flex items-center gap-1 hover:text-blue-600 font-medium transition-colors"
                >
                  <Mail className="w-3 h-3 text-zinc-500" />
                  <span>mfshaik03@gmail.com</span>
                </a>

                <span className="text-zinc-300 hidden sm:inline">•</span>

                <span className="flex items-center gap-1 font-mono font-medium text-zinc-800">
                  <Phone className="w-3 h-3 text-zinc-500" />
                  <span>+91 9182622928</span>
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Career Objective
              </h2>
              <p className="text-zinc-800 text-xs sm:text-[13px] leading-relaxed">
                Driven Computer Science Engineering student with strong proficiency in Data Structures Algorithms
                and Object-Oriented Programming. Possessing knowledge of Java and MySQL, and motivated to excel in
                fast-paced technology environments.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Technical Skills
              </h2>
              <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1">
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Programming Languages:</span> Java
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Backend:</span> Node.js, Spring Boot
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Frontend:</span> ReactJS, HTML, CSS
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Databases:</span> MySQL, MongoDB
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Concepts:</span> Data Structures & Algorithms, OOP, REST APIs
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Tools:</span> Git, VS Code, Java Eclipse, Intellij
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2.5">
                Projects
              </h2>

              <div className="space-y-3.5">
                <div>
                  <h3 className="font-bold text-xs sm:text-[13px] text-zinc-900">
                    VAHAAN BAZAAR (Website) – <span className="font-normal italic">Full-Stack Web Application</span>
                  </h3>
                  <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1 mt-1">
                    <li>Developed using React.js, Node.js, and MongoDB.</li>
                    <li>Implemented backend APIs and database operations, Deployed on Vercel for reliable accessibility.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xs sm:text-[13px] text-zinc-900">
                    KONDAVEEDU (App) – <span className="font-normal italic">Historical Tourism Mobile Application</span>
                  </h3>
                  <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1 mt-1">
                    <li>Developed a tourism app promoting Kondaveedu Fort, Implemented using Flutter with structured and user-friendly interface.</li>
                    <li>Published on Google Play Store under college domain, Represented with Palnadu's District Collector</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xs sm:text-[13px] text-zinc-900">
                    PORTFOLIO (Website) – <span className="font-normal italic">Personal Portfolio Site</span>
                  </h3>
                  <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1 mt-1">
                    <li>Designed and developed a responsive personal portfolio website showcasing skills, projects, education, certifications, and technical experience.</li>
                    <li>Implemented a responsive user interface with smooth animations for an engaging user experience.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2 text-xs sm:text-[13px] text-zinc-800">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2">
                  <span>
                    <span className="font-bold">2026</span> BTech (CSE) - Narasaraopeta Engineering College
                  </span>
                  <span className="font-bold font-sans text-zinc-900 shrink-0">(CGPA: 8.2)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2">
                  <span>
                    <span className="font-bold">2023</span> Class 12 – Sri Chaitanya Junior College
                  </span>
                  <span className="font-bold font-sans text-zinc-900 shrink-0">(8.6)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2">
                  <span>
                    <span className="font-bold">2021</span> Class 10 – St. Joseph's High School
                  </span>
                  <span className="font-bold font-sans text-zinc-900 shrink-0">(9.7)</span>
                </div>
              </div>
            </div>

            {/* Internship */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Internship
              </h2>
              <p className="text-xs sm:text-[13px] text-zinc-800">
                <span className="font-bold">DataValley Remote Java Full Stack Intern (May 2026 – Jul 2026)</span> – Successfully completed an Online Java Full Stack Development in collaboration with APSCHE
              </p>
              <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 mt-1">
                <li>Gained hands-on experience in Core Java, JSP, Spring Boot, HTML, CSS and MySQL.</li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Certifications
              </h2>
              <div className="space-y-2 text-xs sm:text-[13px] text-zinc-800">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <span>
                    Introduction to Internet of Things <span className="font-bold">(NPTEL)</span>
                  </span>
                  <a
                    href="https://github.com/fayaz777-fz/My_Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs flex items-center gap-1 font-sans font-medium shrink-0"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <span>Generative AI by Google Cloud</span>
                  <a
                    href="https://github.com/fayaz777-fz/My_Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs flex items-center gap-1 font-sans font-medium shrink-0"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
