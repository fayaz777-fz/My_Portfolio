import { motion } from "framer-motion";
import { ArrowLeft, Download, Dumbbell, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [downloading, setDownloading] = useState(false);

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  // DOWNLOAD FUNCTION - FIXED
  const handleDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setCountdown(3);

    let time = 3;

    const timer = setInterval(() => {
      time--;
      setCountdown(time);

      if (time <= 0) {
        clearInterval(timer);

        // Create printable HTML document matching exact resume details
        const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SHAIK MOHAMMED FAYAZ - Resume</title>
    <style>
        @page {
            size: A4;
            margin: 15mm 15mm 15mm 15mm;
        }
        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            color: #111;
            line-height: 1.4;
            margin: 0;
            padding: 20px;
            background: #fff;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #222;
            padding-bottom: 10px;
            margin-bottom: 16px;
        }
        .name {
            font-size: 26px;
            font-weight: bold;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 6px;
        }
        .contact {
            font-size: 11px;
            color: #333;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
        }
        .contact a {
            color: #0044cc;
            text-decoration: none;
        }
        .section-title {
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #777;
            margin-top: 14px;
            margin-bottom: 8px;
            padding-bottom: 2px;
            font-family: Arial, sans-serif;
        }
        p, ul {
            margin: 4px 0;
            font-size: 12px;
        }
        ul {
            padding-left: 18px;
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
            <span>Narasaraopet, Andhra Pradesh</span> |
            <span><a href="mailto:mfshaik03@gmail.com">mfshaik03@gmail.com</a></span> |
            <span>+91 9182622928</span> |
            <span><a href="https://github.com/fayaz777-fz">GitHub</a></span>
        </div>
    </div>

    <div class="section-title">Career Objective</div>
    <p>Driven Computer Science Engineering student with strong proficiency in Data Structures, Algorithms, and Object-Oriented Programming. Possessing knowledge of Java and MySQL, and motivated to excel in fast-paced technology environments.</p>

    <div class="section-title">Technical Skills</div>
    <ul>
        <li><span class="bold">Programming Languages:</span> Java</li>
        <li><span class="bold">Backend:</span> Node.js, Spring Boot</li>
        <li><span class="bold">Frontend:</span> ReactJS, HTML, CSS, TypeScript</li>
        <li><span class="bold">Databases:</span> MySQL, MongoDB</li>
        <li><span class="bold">Concepts:</span> Data Structures & Algorithms, OOP, REST APIs</li>
        <li><span class="bold">Tools:</span> Git, VS Code</li>
    </ul>

    <div class="section-title">Projects</div>
    <p class="bold">FZPAY (App) – Flutter-Based Android Payment Application</p>
    <ul>
        <li>Designed and developed FZPAY using Flutter (Dart), delivering a responsive and user-centric interface following modern mobile design standards.</li>
        <li>Released as a signed APK and tested on Android devices.</li>
    </ul>

    <p class="bold">KONDAVEEDU (App) – Historical Tourism Mobile Application</p>
    <ul>
        <li>Developed a tourism app promoting Kondaveedu Fort, implemented using Flutter with structured and user-friendly interface.</li>
        <li>Published on Google Play Store under college domain, Represented with Palnadu's District Collector.</li>
    </ul>

    <p class="bold">VAHAAN BAZAAR (Website) – Full-Stack Web Application</p>
    <ul>
        <li>Developed using React.js, Node.js, and MongoDB.</li>
        <li>Implemented backend APIs and database operations, deployed on Vercel for reliable accessibility.</li>
    </ul>

    <div class="section-title">Education</div>
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

    <div class="section-title">Internship</div>
    <p><span class="bold">DataValley Remote Java Full Stack Intern (May 2026 – Jul 2026)</span> – Successfully completed an Online Java Full Stack Development program in collaboration with APSCHE.</p>
    <ul>
        <li>Gained hands-on experience in Core Java, JSP, Spring Boot, HTML, CSS, and MySQL.</li>
    </ul>

    <div class="section-title">Personal Details</div>
    <ul>
        <li><span class="bold">Date of Birth:</span> 25 July 2005</li>
        <li><span class="bold">Nationality:</span> Indian</li>
        <li><span class="bold">Languages Known:</span> Telugu, English, Hindi</li>
        <li><span class="bold">Location:</span> Narasaraopet, Andhra Pradesh</li>
    </ul>

    <div class="section-title">Hobbies</div>
    <ul>
        <li>Fitness workout</li>
        <li>Photography</li>
    </ul>

    <script>
        window.onload = function() {
            window.print();
        };
    </script>
</body>
</html>
        `;

        const printWindow = window.open("", "_blank");
        if (printWindow) {
          printWindow.document.write(resumeHTML);
          printWindow.document.close();
        }

        setDownloading(false);
        setCountdown(null);
      }
    }, 1000);
  };


  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8 pt-16">

        {/* GLASS BOX CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-4xl
            h-[500px]
            sm:h-[550px]
            md:h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >
          {/* GLASS LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* HEADER SECTION */}
          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
            >
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            className="
              relative
              z-10
              h-[calc(100%-80px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div
              className="
                text-white/80
                text-sm
                sm:text-base
                leading-relaxed
                tracking-wide
                space-y-6
              "
            >
              <p>
                I'm currently a Final Year student pursuing a Computer Science Engineering qualification. Over time, my passion has grown deeply into software development, core computer science concepts, and modern web technologies.
              </p>

              <p>
                Driven Computer Science Engineering student with strong proficiency in Data Structures & Algorithms and Object-Oriented Programming (OOP). Possessing practical knowledge of Java and MySQL, I am seeking an entry-level role where I can contribute my technical skills toward company growth while building a successful career.
              </p>

              <p>
                Coding is something I genuinely enjoy every day. I love learning new programming languages, building scalable web & mobile applications, and understanding how complex software systems function behind the scenes.
              </p>

              <p>
                Beyond fullstack development, software architecture, system security, and artificial intelligence interest me the most. I find it exciting to explore system performance, code optimization, and efficient developer workflows.
              </p>

              <p>
                At the same time, I actively leverage AI tools and modern tech stacks to make development smarter, faster, and more effective.
              </p>

              <p>
                My goal is to build a high-impact career as a Software Engineer, continually learning and mastering new technologies step by step. For me, technology is not just a career path — it is something I truly connect with and am passionate about.
              </p>

              <div className="space-y-1">
                <p>
                  <strong>Personal Details :-</strong>
                </p>
                <p className="leading-snug">
                  Full Name: Shaik Mohammed Fayaz
                  <br />
                  Date of Birth: 25 July 2005
                  <br />
                  Nationality: Indian
                  <br />
                  Location: Narasaraopet, Andhra Pradesh
                  <br />
                  Languages: Telugu, English, Hindi
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Hobbies :-</strong>
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="inline-flex items-center gap-2">
                    <Dumbbell size={18} />
                    Fitness workout
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Camera size={18} />
                    Photography
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DOWNLOAD BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          onClick={handleDownload}
          disabled={downloading}
          className="
            group
            relative
            overflow-hidden
            flex
            items-center
            justify-center
            gap-3
            px-8
            sm:px-10
            py-3
            sm:py-4
            rounded-2xl
            border
            border-white/15
            bg-white/8
            backdrop-blur-xl
            hover:bg-white/15
            hover:border-white/30
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
          "
        >
          {/* BUTTON GLOW EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* BUTTON CONTENT */}
          <div className="relative z-10 flex items-center gap-3">
            <Download
              size={20}
              className="
                group-hover:scale-110
                group-hover:-translate-y-1
                transition-all
                duration-300
              "
            />
            <span className="font-semibold tracking-wide">
              {downloading ? `Downloading in ${countdown}s` : "Download Resume"}
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}