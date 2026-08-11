import { useState, useRef, useCallback, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
  { name: "SpringBoot", icon: "https://cdn.simpleicons.org/springboot/6DB33F", color: "#6DB33F" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ED8B00" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", color: "#FFFFFF" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B", color: "#02569B" },
];

const projects = [
  {
    tech: "web development-VAHAAN BAZAAR",
    thumbnail: "/assets/vahaan_bazaar.jpg",
    github: "https://github.com/fayaz777-fz/Vahaan_Bazaar",
  },
  {
    tech: "APP DEVELOPMENT -TOURIST APP",
    thumbnail: "/assets/tourist_app.png",
    github: "https://github.com/fayaz777-fz/Tourist-App",
  },
  {
    tech: "AI Web Studio-code generator",
    thumbnail: "/assets/website.png",
    github: "https://github.com/fayaz777-fz/Ai-webpage-designer",
  },
  {
    tech: "PERSONAL PORTFOLIO WEBSITE",
    thumbnail: "/assets/portfolio_preview.png",
    github: "https://github.com/fayaz777-fz/My_Portfolio",
  },
];

const certificates = [
  {
    title: "Google Cloud",
    tech: "Generative AI",
    thumbnail: "/assets/gcp_cert.png",
    pdf: "/certificates/gen_ai_certificate.pdf",
  },
  {
    title: "NPTEL",
    tech: "Internet of Things",
    thumbnail: "/assets/nptel_cert.png",
    pdf: "/certificates/nptel_certificate.pdf",
  },
  {
    title: "HACKTHON CERTIFICATE",
    tech: "HacXLerate",
    thumbnail: "/assets/hackathon_cert.png",
    pdf: "/certificates/hackathon_certificate.pdf",
  },
];

const internships = [
  {
    title: "Intern cdertificate ",
    tech: "Java Full Stack",
    thumbnail: "/assets/datavalley_cert.png",
    pdf: "/certificates/datavalley.pdf",
  },
];

const education = [
  {
    title: "10th (SSC)",
    tech: "St. Joseph's High School",
    thumbnail: "/assets/ssc_cert.jpg",
    pdf: "/certificates/ssc_certificate.pdf",
  },
  {
    title: "INTERMEDIATE",
    tech: "Sri Chaitanya Junior College",
    thumbnail: "/assets/intermediate_cert.jpg",
    pdf: "/certificates/intermediate_certificate.pdf",
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2v4m0 12v4m10-10h-4M6 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function ProjectCard({ item }: { item: typeof projects[0] }) {
  return (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06] 
      hover:border-white/25 transition-all duration-500 
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        <img
          src={item.thumbnail}
          alt={item.tech}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>
      <div className="p-5 flex items-center justify-between gap-2 overflow-hidden">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono whitespace-nowrap truncate">
          {item.tech}
        </span>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full 
          bg-white/5 border border-white/15 text-white/60 
          hover:bg-white/10 hover:text-white hover:border-white/30 
          transition-all duration-200 active:scale-95"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

function CertCard({ item }: { item: typeof certificates[0] }) {
  const [downloading, setDownloading] = useState(false);

  const handleOpen = () => {
    setDownloading(true);
    window.open(item.pdf, "_blank");
    setTimeout(() => setDownloading(false), 500);
  };

  return (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06]
      hover:border-white/25 transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-semibold text-sm leading-snug line-clamp-2">{item.title}</p>
        </div>
      </div>
      <div className="px-5 py-4 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
          {item.tech}
        </span>
        <button
          onClick={handleOpen}
          className="flex items-center justify-center w-8 h-8 rounded-full 
          bg-white/5 border border-white/15 text-white/60 
          hover:bg-white/10 hover:text-white hover:border-white/30 
          transition-all duration-200 active:scale-95"
        >
          {downloading ? <Spinner /> : <ExternalLinkIcon />}
        </button>
      </div>
    </div>
  );
}

// ─── 3D Dome Sphere Tech Stack ────────────────────────────────────────────────
function TechGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const rotX = useRef(0.3);
  const rotY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0.004);
  const isDragging = useRef(false);
  const lastMX = useRef(0);
  const lastMY = useRef(0);
  const dragVX = useRef(0);
  const dragVY = useRef(0);
  const rafId = useRef<number | undefined>(undefined);
  const itemEls = useRef<HTMLDivElement[]>([]);

  const RADIUS = 160;
  const n = techStack.length;

  // Fibonacci sphere positions
  const positions = useRef<{ x: number; y: number; z: number }[]>([]);
  useEffect(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    positions.current = Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, []);

  function project(pos: { x: number; y: number; z: number }, rx: number, ry: number) {
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const x1 = pos.x * cosY - pos.z * sinY;
    const z1 = pos.x * sinY + pos.z * cosY;
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const y2 = pos.y * cosX - z1 * sinX;
    const z2 = pos.y * sinX + z1 * cosX;
    return { x: x1, y: y2, z: z2 };
  }

  useEffect(() => {
    const els = itemEls.current;

    function render() {
      if (!isDragging.current) {
        rotY.current += velY.current;
        rotX.current += velX.current;
        velX.current *= 0.97;
        velY.current = velY.current * 0.99 + 0.004 * 0.01;
        if (rotX.current > 0.6) velX.current -= 0.0005;
        if (rotX.current < -0.1) velX.current += 0.0005;
      }

      const projected = positions.current.map((pos, i) => ({
        el: els[i],
        p: project(pos, rotX.current, rotY.current),
      }));

      projected
        .slice()
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ el, p }, idx) => {
          if (!el) return;
          const x = p.x * RADIUS + 210 - 36;
          const y = p.y * RADIUS + 210 - 36;
          const depth = (p.z + 1) / 2;
          const opacity = 0.25 + depth * 0.75;
          const scale = 0.55 + depth * 0.55;
          el.style.cssText = `position:absolute;left:${x}px;top:${y}px;opacity:${opacity};transform:scale(${scale});z-index:${idx};width:72px;height:72px;`;
        });

      rafId.current = requestAnimationFrame(render);
    }

    rafId.current = requestAnimationFrame(render);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMX.current = e.clientX;
    lastMY.current = e.clientY;
    dragVX.current = 0;
    dragVY.current = 0;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastMX.current;
      const dy = e.clientY - lastMY.current;
      dragVX.current = dy * 0.005;
      dragVY.current = dx * 0.005;
      rotX.current += dragVX.current;
      rotY.current += dragVY.current;
      lastMX.current = e.clientX;
      lastMY.current = e.clientY;
    };
    const onMouseUp = () => {
      if (isDragging.current) {
        velX.current = dragVX.current;
        velY.current = dragVY.current || 0.004;
        isDragging.current = false;
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    lastMX.current = e.touches[0].clientX;
    lastMY.current = e.touches[0].clientY;
    dragVX.current = 0;
    dragVY.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastMX.current;
    const dy = e.touches[0].clientY - lastMY.current;
    dragVX.current = dy * 0.005;
    dragVY.current = dx * 0.005;
    rotX.current += dragVX.current;
    rotY.current += dragVY.current;
    lastMX.current = e.touches[0].clientX;
    lastMY.current = e.touches[0].clientY;
  };
  const onTouchEnd = () => {
    velX.current = dragVX.current;
    velY.current = dragVY.current || 0.004;
    isDragging.current = false;
  };

  return (
    <div className="space-y-4">
      {/* Decorative header */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/60" />
        <span className="text-[18px] uppercase tracking-[0.5em] font-mono whitespace-nowrap text-white font-bold drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]">
          STACK TECHNOLOGY
        </span>
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/60" />
      </div>

      {/* Dome sphere */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center select-none"
        style={{ height: "460px", cursor: "grab" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        {/* Scene */}
        <div
          ref={sceneRef}
          className="relative"
          style={{ width: "420px", height: "420px" }}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              ref={(el) => { if (el) itemEls.current[i] = el; }}
              style={{ position: "absolute", width: 72, height: 72 }}
            >
              <div
                className="w-full h-full rounded-[18px] flex flex-col items-center justify-center gap-[5px] transition-[border-color] duration-200 hover:scale-110"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 20px -8px ${tech.color}55`,
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  style={{ width: 30, height: 30, objectFit: "contain" }}
                />
                <span
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edge overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{ boxShadow: "inset 0 0 80px 40px rgba(0,0,0,0.7)" }}
        />
      </div>
    </div>
  );
}
// ─── Skills & Knowledge Section ──────────────────────────────────────────────
function SkillsAndKnowledgeSection() {
  const skillCategories = [
    {
      index: "01",
      title: "CONCEPTS",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      skills: ["Data Structures & Algorithms", "OOP"],
    },
    {
      index: "02",
      title: "FULLSTACK DEVELOPMENT",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      skills: ["Java", "HTML", "SpringBoot", "React.js", "Node.js", "Tailwind CSS"],
    },
    {
      index: "03",
      title: "DATABASES & TOOLS",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      skills: ["MySQL", "MongoDB", "REST APIs", "Git & GitHub"],
    },
  ];

  return (
    <div className="w-full relative">
      {/* Section eyebrow label */}
      <div className="flex items-center justify-start gap-4 mb-8">
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/60" />
        <span className="text-[18px] font-mono uppercase tracking-[0.5em] text-white font-bold whitespace-nowrap drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]">
          Skills &amp; Knowledge
        </span>
        <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/60" />
      </div>

      {/* 3-column grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
        style={{ opacity: 1 }}
      >
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col opacity-0"
            style={{
              animation: `fadeSlideUp 0.55s ease ${0.1 + idx * 0.12}s forwards`,
            }}
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white/60" style={{ transform: "scale(0.85)", transformOrigin: "left center" }}>
                {cat.icon}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-white/85 font-bold">
                {cat.title}
              </span>
            </div>

            {/* Thin separator */}
            <div className="w-full h-px bg-white/15 mb-5" />

            {/* Skill list */}
            <ul className="flex flex-col gap-[10px]">
              {cat.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="group/skill flex items-center gap-2.5 cursor-default select-none"
                >
                  {/* Dot indicator */}
                  <span
                    className="flex-shrink-0 w-[3px] h-[3px] rounded-full bg-white/40 group-hover/skill:bg-white transition-all duration-300 group-hover/skill:scale-125"
                  />
                  <span className="text-sm text-white/80 font-normal tracking-wide group-hover/skill:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

type TabId = "projects" | "certificates" | "internships" | "education";

const tabs: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "internships", label: "Internship Certificate" },
  { id: "education", label: "Education Certificate" },
];

export default function ShowcaseSection() {
  const [active, setActive] = useState<TabId>("projects");
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const switchTab = useCallback(
    (id: TabId) => {
      if (id === active) return;
      setActive(id);
      setAnimKey((k) => k + 1);
    },
    [active]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 50) return;
    const order = tabs.map((t) => t.id);
    const idx = order.indexOf(active);
    if (dx < 0 && idx < order.length - 1) switchTab(order[idx + 1]);
    if (dx > 0 && idx > 0) switchTab(order[idx - 1]);
    touchStartX.current = null;
  };

  const activePillLeft =
    active === "projects"
      ? "8px"
      : active === "certificates"
      ? "calc(25% + 4px)"
      : active === "internships"
      ? "calc(50% + 0px)"
      : "calc(75% - 4px)";

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden text-white px-4 sm:px-8 md:px-16 lg:px-24 py-0 md:py-12 -mt-16 sm:mt-0 md:mt-12">
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        {/* Label */}
        <div className="relative flex items-center justify-center gap-4 mb-5 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
            Showcase
          </span>
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
        </div>

        {/* Heading */}
        <div className="relative overflow-hidden mb-12">
          <h1
            className="text-center font-black tracking-tight leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] text-white opacity-0 whitespace-nowrap animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
            style={{ fontSize: "clamp(32px,6vw,80px)" }}
          >
            <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
              Certification Showcase
            </span>
          </h1>
        </div>

        {/* Tab Switcher */}
        <div
          className="relative flex items-center p-1.5 rounded-full border border-white/20 bg-white/[0.08] mb-14 w-full max-w-md opacity-0 animate-[fadeSlideUp_0.6s_ease_0.3s_forwards] shadow-2xl shadow-black/40"
          style={{ backdropFilter: "blur(30px)" }}
        >
          <div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-white/20 border border-white/40 transition-[left] duration-300 ease-out shadow-xl shadow-white/10"
            style={{
              width: "calc(25% - 4px)",
              left: activePillLeft,
              backdropFilter: "blur(15px)",
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className="relative z-10 flex-1 h-12 rounded-full text-xs font-medium tracking-wide transition-colors duration-200"
            >
              <span
                className={
                  active === tab.id
                    ? "text-white font-semibold"
                    : "text-white/35 hover:text-white/60"
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content area with swipe */}
        <div
          key={animKey}
          className="w-full opacity-0 animate-[contentIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {active === "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {certificates.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <CertCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "internships" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {internships.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <CertCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "education" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <CertCard item={item} />
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Skills & Tech Stack Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 md:mt-20">
          {/* Left Side: Skills & Knowledge */}
          <div className="lg:col-span-8 w-full lg:-ml-6">
            <SkillsAndKnowledgeSection />
          </div>

          {/* Right Side: Tech Stack 3D Globe */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-end">
            <div className="relative scale-90 sm:scale-95 md:scale-100 origin-center lg:origin-right">
              <TechGrid />
            </div>
          </div>
        </div>

        {/* ─── TOOLS USED — Scrolling Marquee ─────────────────────────── */}
        <div className="w-full mt-16 md:mt-24">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-white/60" />
            <span className="text-[18px] uppercase tracking-[0.5em] font-mono whitespace-nowrap text-white font-bold drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]">
              Tools Used
            </span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-white/60" />
          </div>

          {/* Marquee container */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            {/* Scrolling track */}
            <div className="flex items-center gap-12 animate-[toolsMarquee_16s_linear_infinite] whitespace-nowrap w-max">
              {[...Array(4)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-12">
                  {/* IntelliJ */}
                  <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <img
                      src="https://cdn.simpleicons.org/intellijidea/000000/FFFFFF"
                      alt="Intellij"
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-300">
                      Intellij
                    </span>
                  </div>

                  {/* VS Code */}
                  <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                      alt="VS Code"
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-300">
                      VS Code
                    </span>
                  </div>

                  {/* Eclipse 3D */}
                  <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg"
                      alt="Eclipse 3D"
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-300">
                      Eclipse 3D
                    </span>
                  </div>

                  {/* Antigravity — rainbow A arch */}
                  <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="agGrad" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FF4500" />
                          <stop offset="30%" stopColor="#FF8C00" />
                          <stop offset="60%" stopColor="#4FC3F7" />
                          <stop offset="100%" stopColor="#1565C0" />
                        </linearGradient>
                      </defs>
                      {/* Left leg */}
                      <path
                        d="M10 90 Q18 45 50 15"
                        stroke="url(#agGrad)"
                        strokeWidth="11"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Right leg */}
                      <path
                        d="M50 15 Q82 45 90 90"
                        stroke="url(#agGrad)"
                        strokeWidth="11"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-300">
                      Antigravity
                    </span>
                  </div>

                  {/* Qoder — official lobe-icons SVG */}
                  <div className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Qoder "a" letter mark: white left curve, green right fill */}
                      <rect width="100" height="100" rx="18" fill="#000" />
                      {/* Left white arc */}
                      <path
                        d="M55 20 C30 20 18 36 18 55 C18 74 30 82 50 82 C58 82 65 79 70 74 L70 80 L82 80 L82 42 L70 42 L70 48 C65 38 58 34 55 20Z"
                        fill="white"
                      />
                      {/* Green right segment */}
                      <path
                        d="M70 48 C68 44 63 38 55 36 C46 34 38 40 36 50 C34 60 40 70 50 72 C60 74 68 68 70 60 Z"
                        fill="#22C55E"
                      />
                    </svg>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-300">
                      Qoder
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes headingReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineMove {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
        @keyframes toolsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>

    </section>
  );
}
