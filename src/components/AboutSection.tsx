import { useEffect, useRef } from "react";
import { GraduationCap, Lightbulb, Globe, Users } from "lucide-react";

const timeline = [
  {
    year: "2025–2029",
    title: "B.Tech Computer Science (AI/ML)",
    org: "NxtWave × Noida International University",
    detail: "Specializing in Artificial Intelligence & Machine Learning",
  },
  {
    year: "2024–Present",
    title: "Freelance Full-Stack Developer",
    org: "Independent",
    detail: "Delivered MERN stack projects for multiple clients worldwide",
  },
  {
    year: "2024–Present",
    title: "Tech Content Creator",
    org: "YouTube & Instagram",
    detail: "Creating tech & innovation content inspiring a growing audience",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 section-fade">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">01 / About</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio card */}
          <div className="section-fade">
            <div className="glass-card rounded-2xl p-8 border border-white/8 shadow-glass space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Lightbulb size={22} className="text-background" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-foreground">Career Vision</h3>
                  <p className="text-xs text-muted-foreground">Global Tech Leader</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-inter">
                I'm <span className="text-primary font-semibold">Aditya Yadav</span>, a passionate Computer Science student
                specializing in AI/ML. My mission is to become a globally recognized tech leader who bridges the gap
                between cutting-edge innovation and meaningful user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed font-inter">
                As a freelance developer, I've delivered full-stack MERN applications for clients across multiple industries.
                Outside of development, I create tech-focused content on YouTube and Instagram, helping others navigate
                the ever-evolving world of technology.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { icon: <Globe size={16} />, label: "Full-Stack Dev" },
                  { icon: <Users size={16} />, label: "Content Creator" },
                  { icon: <Lightbulb size={16} />, label: "AI/ML Explorer" },
                  { icon: <GraduationCap size={16} />, label: "B.Tech (2029)" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2 glass-card rounded-lg px-3 py-2 border border-white/5">
                    <span className="text-primary">{icon}</span>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="section-fade space-y-6">
            <h3 className="font-orbitron text-xl font-semibold text-foreground flex items-center gap-2 mb-8">
              <GraduationCap size={20} className="text-primary" />
              Education & Experience
            </h3>
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "var(--gradient-primary)" }} />

              {timeline.map((item, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  {/* Dot */}
                  <div className="absolute -left-[1.375rem] top-1 w-3 h-3 rounded-full border-2 border-primary glow-blue"
                    style={{ background: "hsl(var(--background))" }} />
                  <div className="glass-card rounded-xl p-5 border border-white/8 ml-4 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-blue">
                    <span className="text-xs font-mono text-primary tracking-widest">{item.year}</span>
                    <h4 className="font-orbitron text-sm font-bold text-foreground mt-1">{item.title}</h4>
                    <p className="text-xs text-primary/70 mb-2">{item.org}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
