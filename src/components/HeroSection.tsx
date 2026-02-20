import { ArrowRight, Youtube, Briefcase, Code2 } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(195 100% 50%), transparent)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(265 80% 55%), transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Profile photo */}
        <div className="relative animate-float">
          <div className="absolute -inset-2 rounded-full animate-spin-slow opacity-70"
            style={{ background: "conic-gradient(from 0deg, hsl(195 100% 50%), hsl(265 80% 55%), hsl(195 100% 50%))" }} />
          <img
            src={profileImg}
            alt="Aditya Yadav"
            className="relative w-36 h-36 rounded-full object-cover border-2 border-transparent profile-glow"
            style={{ borderColor: "rgba(0,212,255,0.3)" }}
          />
        </div>

        {/* Badge */}
        <div className="glass-card px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-inter">Available for opportunities</span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="gradient-text animate-gradient" style={{ backgroundSize: "200% 200%" }}>
              Aditya Yadav
            </span>
          </h1>
          <p className="font-orbitron text-lg md:text-xl font-medium text-muted-foreground tracking-widest uppercase">
            Aspiring Tech Leader &nbsp;|&nbsp; Full-Stack Developer
          </p>
          <p className="text-sm text-muted-foreground tracking-wider">
            Python &nbsp;•&nbsp; JavaScript &nbsp;•&nbsp; C++
          </p>
        </div>

        {/* Sub-headline */}
        <div className="glass-card px-5 py-2 rounded-full border border-primary/20 flex items-center gap-2">
          <Youtube size={16} className="text-primary" />
          <span className="text-sm font-medium gradient-text">Tech & Innovation Content Creator</span>
        </div>

        {/* Intro paragraph */}
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-inter">
          B.Tech Computer Science (AI/ML) student at{" "}
          <span className="text-primary font-medium">NxtWave × Noida International University</span>{" "}
          (Graduating 2029). Passionate about building modern web applications, exploring AI/ML, and
          creating tech-focused content that inspires innovation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#projects")}
            className="group flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-glow-blue"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Code2 size={16} />
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm glass-card border border-primary/30 gradient-text hover:border-primary/60 transition-all duration-300"
          >
            <Briefcase size={16} className="text-primary" />
            Hire Me
          </button>

          <a
            href="https://www.youtube.com/@Adityakvideos-o4t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm glass-card border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
          >
            <Youtube size={16} className="text-red-400" />
            Watch on YouTube
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
