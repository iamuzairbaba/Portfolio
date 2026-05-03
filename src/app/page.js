"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight, AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { FiArrowUpRight, FiCode, FiDatabase, FiLayers, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import ogo from "../../public/ogo.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/iamuzairbaba", icon: AiFillGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/uzxyrr/", icon: AiFillLinkedin },
];
const statBlocks = [
  { value: "2+", label: "Years building production-ready web apps" },
  { value: "1", label: "ERP platform being scaled and migrated right now" },
  { value: "Full stack", label: "Frontend polish plus backend ownership" },
];
const experience = [
  {
    role: "Full Stack Developer",
    company: "Voctrum",
    period: "June 2025 - Present",
    points: [
      "Developing full stack applications with React.js, Next.js, Node.js, and MongoDB while designing REST APIs and backend logic.",
      "Helping build and scale an ERP system, including authentication, database operations, and API integrations.",
      "Leading part of the migration from a Node.js backend to ASP.NET and from the existing frontend to a stronger Next.js architecture.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "Voctrum",
    period: "Nov 2024 - June 2025",
    points: [
      "Built frontend portals for job seeking, e-commerce, quiz applications, and employee dashboards.",
      "Improved load time by refactoring into reusable components and moving Tailwind-heavy UI into cleaner SCSS structure.",
    ],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "Cybanor",
    period: "Dec 2023 - Jun 2024",
    points: ["Worked with senior developers on responsive JavaScript and React applications and collaborated on GraphQL-backed flows."],
  },
];
const skillGroups = [
  { title: "Frontend Systems", icon: FiLayers, items: ["React.js", "Next.js", "TypeScript", "Redux", "Recoil", "Zustand", "Tailwind CSS", "SCSS", "Jest"] },
  { title: "Backend Logic", icon: FiDatabase, items: ["Node.js", "MongoDB", "REST APIs", "JWT Auth", "RBAC", "Basic ASP.NET"] },
  { title: "Shipping Workflow", icon: FiCode, items: ["Docker", "AWS S3", "CI/CD", "Netlify", "Vercel", "Agile/Scrum"] },
];
const projectCards = [
  {
    title: "ERP System",
    category: "Current flagship build",
    image: web6,
    accent: "from-[#ff7b54] via-[#ffb36b] to-[#ffe082]",
    summary: "A scalable multi-tenant ERP platform built with React.js, Zustand, Node.js, Fastify, and MongoDB with tenant-level isolation.",
    bullets: ["JWT authentication and RBAC with server-side permission enforcement", "Configuration-driven dashboards, theming, and feature-based rendering", "Migration work toward a stronger Next.js frontend and ASP.NET backend"],
    href: "mailto:iamuzibaba@gmail.com?subject=ERP%20System%20Inquiry",
    cta: "Ask about the ERP build",
  },
  {
    title: "GYM BOI",
    category: "Featured shipped project",
    image: web1,
    accent: "from-[#4ef2c2] via-[#37c7ff] to-[#8f8bff]",
    summary: "A fitness app focused on responsive interactions, workout scheduling, and clear exercise flows built with ReactJS and Tailwind CSS.",
    bullets: ["Responsive interface tuned for smooth navigation", "Exercise tracking and workout planning features", "UI-first product thinking around habit-building flows"],
    href: "https://gymboi.netlify.app",
    cta: "Open live project",
  },
  {
    title: "Weatherizz",
    category: "Weather experience",
    image: web5,
    accent: "from-[#38bdf8] via-[#818cf8] to-[#c084fc]",
    summary: "A responsive weather app using ReactJS and Tailwind CSS with current conditions plus hourly and daily forecasts.",
    bullets: ["Powered by OpenWeather data", "City search and location-based weather", "Forecast-focused responsive layout"],
    href: "https://weatherizz.netlify.app/",
    cta: "Open live project",
  },
  {
    title: "Deen School Website",
    category: "NGO landing page",
    image: web2,
    accent: "from-[#22c55e] via-[#84cc16] to-[#facc15]",
    summary: "A responsive landing page built from a Figma design into a ReactJS frontend for a local NGO website.",
    bullets: ["Design-to-code frontend work", "Responsive content structure", "Clean React landing page implementation"],
    href: "https://deenschool.netlify.app",
    cta: "Open live project",
  },
  {
    title: "Gehna Jewellery",
    category: "Brand landing page",
    image: web3,
    accent: "from-[#f472b6] via-[#fb7185] to-[#fb923c]",
    summary: "A jewellery shop landing page translated from Figma into a responsive React experience with a polished product presentation.",
    bullets: ["Figma-based build", "Brand-first landing experience", "Responsive React implementation"],
    href: "https://gehnaajewellery.netlify.app",
    cta: "Open live project",
  },
  {
    title: "Rizzipy",
    category: "Recipe app",
    image: web4,
    accent: "from-[#f97316] via-[#ef4444] to-[#eab308]",
    summary: "A recipe application for food enthusiasts built with ReactJS and Tailwind CSS with a playful, responsive interface.",
    bullets: ["Food-focused product UI", "Responsive recipe browsing", "ReactJS plus Tailwind build"],
    href: "https://rizzipy.netlify.app",
    cta: "Open live project",
  },
];
const floatingTags = ["Next.js", "Node.js", "MongoDB", "REST APIs", "TypeScript", "Tailwind", "ERP Systems", "Docker"];

function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay }}>{children}</motion.div>;
}

function ProjectStoryCard({ card, index, isActive, onEnter }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={onEnter}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.7, delay: index * 0.04 }}
      className={`project-card rounded-[2rem] border p-6 transition duration-300 md:p-8 ${
        isActive
          ? "border-[var(--border-strong)] bg-[var(--panel-strong)]"
          : "border-[var(--border-soft)] bg-[var(--surface-soft)]"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-faint)]">{card.category}</p>
      <h3 className="mt-4 text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">{card.title}</h3>
      <p className="mt-4 text-lg leading-8 text-[var(--text-base)]">{card.summary}</p>
      <div className="mt-6 space-y-3">
        {card.bullets.map((bullet) => <div key={bullet} className="flex items-start gap-3 text-sm leading-7 text-[var(--text-soft)] md:text-base"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--text-strong)]" /><span>{bullet}</span></div>)}
      </div>
      <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noreferrer" : undefined} className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--button-primary)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--button-primary-text)] transition hover:gap-4">{card.cta}<FiArrowUpRight /></a>
    </motion.article>
  );
}

export default function Home() {
  const projectsRef = useRef(null);
  const projectListRef = useRef(null);
  const projectCardRefs = useRef([]);
  const [theme, setTheme] = useState("dark");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [previewOffset, setPreviewOffset] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const { scrollYProgress } = useScroll({ target: projectsRef, offset: ["start start", "end end"] });
  const heroProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  const orbitLeft = useTransform(heroProgress, [0, 1], [0, -120]);
  const orbitRight = useTransform(heroProgress, [0, 1], [0, 120]);
  const skillTicker = useMemo(() => [...floatingTags, ...floatingTags], []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    function updatePreviewOffset() {
      const list = projectListRef.current;
      const card = projectCardRefs.current[activeProjectIndex];

      if (!list || !card) {
        return;
      }

      const listHeight = list.clientHeight;
      const cardCenter = card.offsetTop + card.clientHeight / 2;
      const previewHeight = Math.min(listHeight, 1200);
      const nextOffset = Math.max(cardCenter - previewHeight / 2, 0);
      setPreviewOffset(nextOffset);
    }

    updatePreviewOffset();
    window.addEventListener("resize", updatePreviewOffset);

    return () => window.removeEventListener("resize", updatePreviewOffset);
  }, [activeProjectIndex]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send your message right now.");
      setStatus({ type: "success", message: "Message sent successfully. I will get back to you soon." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong while sending the message." });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main data-theme={theme} className="relative bg-[var(--page-bg)] text-[var(--text-strong)]"><div className="overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,123,84,0.18),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(55,199,255,0.16),_transparent_25%),radial-gradient(circle_at_bottom,_rgba(255,77,141,0.18),_transparent_30%)]" />
      <section className="relative min-h-screen px-6 pb-16 pt-6 md:px-10 lg:px-16">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full border border-[var(--border-strong)] bg-[var(--panel-soft)] px-4 py-4 backdrop-blur-xl md:px-5">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-faint)]">Uzair Bashir</p>
            <p className="text-sm text-[var(--text-soft)]">Full Stack Developer</p>
          </div>
          <div className="hidden items-center gap-6 text-sm text-[var(--text-soft)] md:flex">
            <a href="#experience" className="transition hover:text-[var(--text-strong)]">Experience</a>
            <a href="#projects" className="transition hover:text-[var(--text-strong)]">Projects</a>
            <a href="#contact" className="transition hover:text-[var(--text-strong)]">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--panel-soft)] text-[var(--text-strong)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]" aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>{theme === "dark" ? <AiOutlineSun size={20} /> : <AiOutlineMoon size={20} />}</button>
            <a href="/ResumeFullStackUzairBashir.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-[var(--button-primary)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text)] transition hover:scale-105"><span className="hidden sm:inline">Resume</span><span className="sm:hidden">CV</span><AiOutlineArrowRight /></a>
          </div>
        </nav>
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="relative">
            <motion.div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-[#ff7b54]/25 blur-3xl" style={{ x: orbitLeft }} />
            <motion.div className="absolute -right-10 top-40 h-52 w-52 rounded-full bg-[#37c7ff]/20 blur-3xl" style={{ x: orbitRight }} />
            <Reveal className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--text-soft)]"><FiMapPin />Srinagar, Jammu and Kashmir</div>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] text-[var(--text-strong)] sm:text-6xl lg:text-8xl">I build <span className="theme-accent-text">loud</span>, fast, full-stack products that feel alive.</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-base)] md:text-lg">Full Stack Developer with 2 years of experience across frontend and full stack roles. I work across React.js, Next.js, Node.js, MongoDB, and REST APIs with a focus on scalable apps, strong UI, and product momentum.</p>
            </Reveal>
            <Reveal className="relative z-10 mt-8 flex flex-wrap gap-4" delay={0.15}>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[var(--button-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--button-accent-text)] transition hover:scale-[1.03]">Explore work<FiArrowUpRight /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-strong)] transition hover:bg-[var(--surface-hover)]">Contact me<FiMail /></a>
            </Reveal>
            <Reveal className="relative z-10 mt-12 grid gap-4 md:grid-cols-3" delay={0.25}>
              {statBlocks.map((stat) => <div key={stat.label} className="rounded-[1.6rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5 backdrop-blur-sm"><p className="text-2xl font-semibold text-[var(--text-strong)]">{stat.value}</p><p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{stat.label}</p></div>)}
            </Reveal>
          </div>
          <Reveal className="relative flex justify-center lg:justify-end" delay={0.2}>
            <div className="relative h-[26rem] w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--panel-soft)] p-3 shadow-[0_0_80px_rgba(55,199,255,0.12)] md:h-[30rem]">
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-full border border-[var(--border-soft)] bg-[var(--overlay-card)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--text-soft)] md:inset-x-6 md:top-6"><span>Open to build</span><span>2026</span></div>
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, -2, 0, 2, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative mt-16 h-[19rem] w-full overflow-hidden rounded-[1.6rem] border border-[var(--border-soft)] md:mt-20 md:h-[22rem]">
                <Image src={ogo} alt="Uzair Bashir portrait" fill className="object-cover" sizes="(max-width: 1024px) 70vw, 30vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--page-bg)] via-transparent to-transparent" />
              </motion.div>
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--overlay-card)] p-4 backdrop-blur-xl md:-bottom-5 md:left-5 md:right-5"><p className="text-xs uppercase tracking-[0.35em] text-[var(--text-faint)]">Current focus</p><p className="mt-2 text-sm leading-6 text-[var(--text-base)]">ERP systems, scalable APIs, dashboard UX, and performance-driven Next.js builds.</p></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="overflow-hidden border-y border-[var(--border-soft)] bg-[var(--surface-soft)] py-4">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="flex min-w-max gap-3">
          {skillTicker.map((tag, index) => <div key={`${tag}-${index}`} className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-2 text-sm uppercase tracking-[0.3em] text-[var(--text-soft)]">{tag}</div>)}
        </motion.div>
      </section>
      <section id="experience" className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="section-kicker">Experience</p><h2 className="section-title max-w-3xl">From frontend execution to full-stack ownership.</h2></Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6 backdrop-blur-sm"><p className="text-sm uppercase tracking-[0.35em] text-[var(--text-faint)]">Professional summary</p><p className="mt-5 text-lg leading-8 text-[var(--text-base)]">I&apos;ve spent the last two years moving from strong frontend execution into full stack product work, building scalable apps, RESTful APIs, dashboards, and ERP features inside Agile teams.</p></Reveal>
            <div className="space-y-6">
              {experience.map((item, index) => <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}><article className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6 backdrop-blur-sm"><div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"><div><p className="theme-accent-text text-xs uppercase tracking-[0.35em]">{item.company}</p><h3 className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">{item.role}</h3></div><span className="text-sm uppercase tracking-[0.28em] text-[var(--text-faint)]">{item.period}</span></div><div className="mt-6 space-y-3">{item.points.map((point) => <p key={point} className="flex gap-3 text-[var(--text-base)]"><span className="mt-2 h-2 w-2 rounded-full bg-[#37c7ff]" /><span className="leading-7">{point}</span></p>)}</div></article></Reveal>)}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" ref={projectsRef} className="relative px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8">
            <p className="section-kicker">Projects</p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="section-title max-w-3xl">My projects don&apos;t just sit here. They step forward as you move through them.</h2>
              <p className="max-w-lg text-sm leading-7 text-[var(--text-soft)]">This section turns the portfolio into a guided walkthrough: one live preview, one active story, and a cleaner way to feel how each build stands on its own.</p>
            </div>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <motion.div
              className="relative hidden lg:block lg:self-start"
              animate={{ y: previewOffset }}
              transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.45 }}
            >
              <motion.article
                key={projectCards[activeProjectIndex].title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="project-card relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--panel-strong)] p-4 md:p-5"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${projectCards[activeProjectIndex].accent} opacity-20`} />
                <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--border-soft)]">
                  <Image
                    src={projectCards[activeProjectIndex].image}
                    alt={projectCards[activeProjectIndex].title}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="relative mt-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-faint)]">{projectCards[activeProjectIndex].category}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-[var(--text-strong)] md:text-4xl">{projectCards[activeProjectIndex].title}</h3>
                  <p className="mt-3 leading-7 text-[var(--text-base)]">{projectCards[activeProjectIndex].summary}</p>
                </div>
              </motion.article>
            </motion.div>
            <div ref={projectListRef} className="space-y-6">
              {projectCards.map((card, index) => (
                <div
                  key={card.title}
                  ref={(element) => {
                    projectCardRefs.current[index] = element;
                  }}
                >
                  <ProjectStoryCard
                    card={card}
                    index={index}
                    isActive={activeProjectIndex === index}
                    onEnter={() => setActiveProjectIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="section-kicker">Skills</p><h2 className="section-title max-w-3xl">Frontend depth, backend control, and shipping discipline.</h2></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={index * 0.08}>
                  <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-[var(--text-strong)]">{group.title}</h3>
                      <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-3 text-[#ffe082]"><Icon size={20} /></div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {group.items.map((item) => <motion.span key={item} whileHover={{ y: -5, scale: 1.03 }} className="rounded-full border border-[var(--border-soft)] bg-[var(--chip-bg)] px-4 py-2 text-sm text-[var(--text-base)]">{item}</motion.span>)}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section id="contact" className="px-6 pb-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[2rem] border border-[var(--border-soft)] bg-gradient-to-br from-[#ff7b54]/18 via-[var(--surface-soft)] to-[#37c7ff]/16 p-7 backdrop-blur-sm">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title max-w-lg">Let&apos;s build something that doesn&apos;t look like everyone else&apos;s.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-base)]">If you need a full stack developer for dashboards, ERP modules, product UI, API work, or a sharper Next.js frontend, send me a message here.</p>
            <div className="mt-8 space-y-4 text-[var(--text-base)]">
              <a href="mailto:iamuzibaba@gmail.com" className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--chip-bg)] px-4 py-4 transition hover:bg-[var(--surface-hover)]"><FiMail />iamuzibaba@gmail.com</a>
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--chip-bg)] px-4 py-4"><FiMapPin />Srinagar, Jammu and Kashmir</div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--text-base)] transition hover:bg-[var(--surface-hover)]"><Icon size={20} />{link.label}</a>;
                })}
              </div>
            </div>
          </Reveal>
          <Reveal className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-7 backdrop-blur-sm" delay={0.1}>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2"><span className="text-sm uppercase tracking-[0.28em] text-[var(--text-faint)]">Name</span><input required value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))} className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--input-bg)] px-4 py-4 text-[var(--text-strong)] outline-none transition placeholder:text-[var(--text-faint)] focus:border-[#37c7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]" placeholder="Your name" /></label>
                <label className="space-y-2"><span className="text-sm uppercase tracking-[0.28em] text-[var(--text-faint)]">Email</span><input required type="email" value={formData.email} onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))} className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--input-bg)] px-4 py-4 text-[var(--text-strong)] outline-none transition placeholder:text-[var(--text-faint)] focus:border-[#37c7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]" placeholder="name@email.com" /></label>
              </div>
              <label className="space-y-2"><span className="text-sm uppercase tracking-[0.28em] text-[var(--text-faint)]">Phone</span><input value={formData.phone} onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))} className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--input-bg)] px-4 py-4 text-[var(--text-strong)] outline-none transition placeholder:text-[var(--text-faint)] focus:border-[#37c7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]" placeholder="1234-567-789" /></label>
              <label className="space-y-2"><span className="text-sm uppercase tracking-[0.28em] text-[var(--text-faint)]">Subject</span><input required value={formData.subject} onChange={(event) => setFormData((current) => ({ ...current, subject: event.target.value }))} className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--input-bg)] px-4 py-4 text-[var(--text-strong)] outline-none transition placeholder:text-[var(--text-faint)] focus:border-[#37c7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]" placeholder="Project, role, or collaboration idea" /></label>
              <label className="space-y-2"><span className="text-sm uppercase tracking-[0.28em] text-[var(--text-faint)]">Message</span><textarea required rows={6} value={formData.message} onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))} className="w-full rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--input-bg)] px-4 py-4 text-[var(--text-strong)] outline-none transition placeholder:text-[var(--text-faint)] focus:border-[#37c7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]" placeholder="Tell me what you want to build." /></label>
              <button type="submit" disabled={isSending} className="inline-flex items-center gap-3 rounded-full bg-[var(--button-primary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--button-primary-text)] transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60">{isSending ? "Sending..." : "Send message"}<FiSend /></button>
              {status.message ? <p className={`rounded-2xl border px-4 py-3 text-sm ${status.type === "success" ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200" : "border-rose-400/25 bg-rose-400/10 text-rose-200"}`}>{status.message}</p> : null}
            </form>
          </Reveal>
        </div>
      </section>
    </div></main>
  );
}
