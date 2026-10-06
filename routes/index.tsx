import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, BookOpen, BrainCircuit, Check, Code2, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, MessageCircle, Send, Terminal, X } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import digitalForm from "../digital-form.jpg";
import resumeAsset from "../resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sachin Phoolchand Doodhwal — CSE Student & Tech Enthusiast" },
    { name: "description", content: "Meet Sachin Phoolchand Doodhwal, a first-year B.Tech Computer Science student at JECRC University, Jaipur, exploring web development and AI." },
    { property: "og:title", content: "Sachin Phoolchand Doodhwal — Personal Portfolio" },
    { property: "og:description", content: "A curiosity-driven CSE student exploring software, the web, and artificial intelligence at JECRC University, Jaipur." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Portfolio,
});

const links = [ ["home", "Home"], ["about", "About"], ["education", "Education"], ["skills", "Skills"], ["certifications", "Achievements"], ["contact", "Contact"] ];

function SectionHeading({ number, label, title, subtitle }: { number: string; label: string; title: string; subtitle?: string }) {
  return <div className="section-heading"><div className="eyebrow"><span>{number}</span> / {label}</div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

const githubProfileUrl = "https://github.com/sachin26bcon2485-oss";

function Socials() {
  return <div className="socials"><span className="control-hint"><Button variant="social" size="icon" asChild><a href={githubProfileUrl} target="_blank" rel="noreferrer" aria-label="Sachin on GitHub"><Github /></a></Button><span className="hint">@sachin26bcon2485-oss</span></span><span className="control-hint"><Button variant="social" size="icon" disabled aria-label="LinkedIn profile unavailable"><Linkedin /></Button><span className="hint">LinkedIn link coming soon</span></span></div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [formNotice, setFormNotice] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-20% 0px -55% 0px" });
    document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormNotice("Message delivery is not connected yet. Your message has not been sent.");
  }
  return <div className="portfolio">
    <a className="skip-link" href="#home">Skip to content</a>
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="wordmark" aria-label="Sachin home">sachin<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined}>{label}</a>)}</nav>
        <div className="header-actions"><Button variant="social" asChild className="contact-action"><a href="#contact">Contact Me <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}</nav>}
    </header>
    <main>
      <section id="home" className="hero">
        <img src={digitalForm} className="hero-art" alt="Intertwined emerald glass and chrome mathematical sculpture" width={1536} height={1024} fetchPriority="high" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-status"><span className="status-dot" /> CURIOUS MIND. ENDLESS POSSIBILITIES.</div>
            <h1>Hi, I'm <span>Sachin Phoolchand<br className="desktop-break" /> Doodhwal<span className="headline-period">.</span></span></h1>
            <p className="hero-subtitle">First-Year B.Tech CSE Student <span className="subtitle-pipe">|</span><br /> Web Development &amp; AI Enthusiast</p>
            <p className="hero-description">Turning curiosity into code.<br />Learning, exploring, and taking the first steps toward<br className="desktop-break" /> building something meaningful.</p>
            <div className="hero-actions"><Button variant="portfolio" asChild className="resume-button"><a href={resumeAsset.url} download="Sachin_Doodhwal_Resume.pdf" target="_blank" rel="noreferrer"><Download size={17} /> Download Resume</a></Button><div className="social-divider" /><Socials /></div>
          </div>
          <div className="hero-bottom"><a href="#about" className="scroll-link"><ArrowDown size={15} /><span>A little more about me</span></a><span className="hero-location"><MapPin size={13} /> JAIPUR, INDIA</span></div>
        </div>
      </section>
      <section id="about" className="section-band">
        <div className="container about-grid">
          <SectionHeading number="01" label="ABOUT ME" title="Curiosity is my starting point." />
          <div className="about-content"><p className="lead">I'm Sachin, a first-year Computer Science &amp; Engineering student at <span>JECRC University, Jaipur.</span></p><p>I’m fascinated by how a few lines of code can turn an idea into something real. My interests span software development, web development, and the possibilities of artificial intelligence and machine learning.</p><p>Right now, I’m building a strong foundation in computer science, exploring new technologies, and learning one step at a time. I value thoughtful problem-solving, a willingness to experiment, and the kind of curiosity that never stops asking “why?”</p><div className="interest-tags"><span><Code2 size={14} /> Software &amp; Web</span><span><BrainCircuit size={14} /> AI &amp; Machine Learning</span><span><BookOpen size={14} /> Always learning</span></div></div>
        </div>
      </section>
      <section id="education" className="section-band">
        <div className="container"><SectionHeading number="02" label="EDUCATION" title="A foundation for what’s next." subtitle="My academic journey, from school to computer science." />
          <div className="education-list">
            {[{title:"B.Tech in Computer Science and Engineering", school:"JECRC University, Jaipur", detail:"1st Year · Pursuing", current:true, board:"UNDERGRADUATE"}, {title:"Class 12th — Physics, Chemistry & Mathematics",school:"Board of Secondary Education, Rajasthan",detail:"RBSE",current:false,board:"SENIOR SECONDARY"},{title:"Class 10th",school:"Central Board of Secondary Education",detail:"CBSE",current:false,board:"SECONDARY"}].map((item, i) => <article className={`education-item ${item.current ? "education-current" : ""}`} key={item.board}><div className="timeline-marker">{item.current ? <GraduationCap size={20} /> : <span>{String(i + 1).padStart(2,"0")}</span>}</div><div className="education-text"><span className="small-label">{item.board}</span><h3>{item.title}</h3><p>{item.school}</p></div><div className={item.current ? "pursuing-badge" : "board-label"}>{item.current && <span className="status-dot" />}{item.detail}</div></article>)}
          </div>
        </div>
      </section>
      <section id="skills" className="section-band">
        <div className="container"><SectionHeading number="03" label="SKILLS & INTERESTS" title="My learning toolkit." subtitle="The areas I’m exploring as I grow into a developer." />
          <div className="skills-grid">{[
            {Icon:Terminal,label:"Programming Languages",tags:["Programming fundamentals", "Problem-solving", "Logical thinking"],note:"Building the foundations"},
            {Icon:Code2,label:"Web Development",tags:["Frontend concepts", "Responsive design", "Web fundamentals"],note:"Exploring the web"},
            {Icon:BrainCircuit,label:"AI Tools & Frameworks",tags:["Artificial intelligence", "Machine learning", "AI-assisted learning"],note:"Following my curiosity"},
            {Icon:BookOpen,label:"Core CS Subjects",tags:["Computer science fundamentals", "Algorithms", "Computational thinking"],note:"Learning one concept at a time"},
          ].map(({Icon,label,tags,note},i) => <article key={label} className="skill-card"><div className="skill-card-top"><Icon size={23} /><span>0{i+1}</span></div><h3>{label}</h3><div className="skill-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><p>{note}</p></article>)}</div>
        </div>
      </section>
      <section id="certifications" className="section-band">
        <div className="container achievements-grid"><SectionHeading number="04" label="CERTIFICATIONS & ACHIEVEMENTS" title="Every step counts." subtitle="An academic foundation. A new chapter of learning." /><div className="achievement-list"><article><div className="achievement-icon"><GraduationCap size={21} /></div><div><h3>Beginning my engineering journey</h3><p>Pursuing B.Tech CSE at JECRC University, Jaipur.</p><span className="small-label">CURRENT CHAPTER</span></div></article><article><div className="achievement-icon"><Check size={21} /></div><div><h3>A foundation in science &amp; mathematics</h3><p>Class 12th in PCM (RBSE), following Class 10th (CBSE).</p><span className="small-label">ACADEMIC FOUNDATION</span></div></article><div className="certification-note"><BookOpen size={17} /><p>More to learn. More to achieve.<br /><span>Certifications will be added as I earn them.</span></p></div></div></div>
      </section>
      <section id="contact" className="section-band contact-section">
        <div className="container contact-grid"><div><SectionHeading number="05" label="CONTACT" title="Let’s start a conversation." /><p className="contact-intro">Have an idea, a learning opportunity, or just want to say hello? I’d love to connect.</p><div className="contact-details"><div><Mail size={20} /><div><span className="small-label">EMAIL</span><p>Email details coming soon</p></div></div><div><MapPin size={20} /><div><span className="small-label">BASED IN</span><p>Jaipur, Rajasthan, India</p></div></div></div></div><form className="contact-form" onSubmit={submitContact}><div className="form-row"><label htmlFor="name">Your name<Input id="name" name="name" placeholder="Name" autoComplete="name" required maxLength={100} /></label><label htmlFor="email">Email address<Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required maxLength={254} /></label></div><label htmlFor="message">Your message<Textarea id="message" name="message" placeholder="What’s on your mind?" required maxLength={5000} rows={5} /></label><div className="form-bottom"><span>Message delivery coming soon</span><Button variant="portfolio" type="submit">Send Message <Send size={16} /></Button></div>{formNotice && <p role="status" className="form-notice">{formNotice}</p>}</form></div>
      </section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><a className="wordmark" href="#home">sachin<span>.</span></a><p>A little curiosity. A lot of possibility.</p><Socials /></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Sachin Phoolchand Doodhwal</p><nav aria-label="Footer navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#contact">Contact <ArrowUpRight size={12} /></a></nav><span className="footer-made">Made with curiosity <span>↗</span></span></div></div></footer>
    <div className="chatbot-reserve" aria-hidden="true" title="Future chatbot space"><MessageCircle size={20} /></div>
  </div>;
}