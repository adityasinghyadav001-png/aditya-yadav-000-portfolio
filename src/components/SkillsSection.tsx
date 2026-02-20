import { useEffect, useRef } from "react";

const technicalSkills = [
  { name: "MERN Stack Development", level: 88 },
  { name: "Python", level: 85 },
  { name: "JavaScript / TypeScript", level: 82 },
  { name: "C++", level: 75 },
  { name: "Website Creation", level: 90 },
  { name: "AI / ML Concepts", level: 70 },
];

const creativeSkills = [
  { name: "UI/UX Design", level: 80 },
  { name: "Video Editing", level: 85 },
  { name: "Tech Content Creation", level: 92 },
  { name: "Brand Identity", level: 72 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`;
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement!);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground font-inter">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          ref={barRef}
          className="skill-bar-fill rounded-full transition-all duration-1000 ease-out"
          style={{ width: "0%", transitionDelay: "0.2s" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
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
    <section id="skills" ref={sectionRef} className="relative py-32 px-6">
      {/* BG orb */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(265 80% 55%), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 section-fade">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">02 / Skills</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text">Skills & Expertise</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Technical skills */}
          <div className="section-fade glass-card rounded-2xl p-8 border border-white/8 shadow-glass">
            <h3 className="font-orbitron text-lg font-bold mb-8 text-foreground">
              <span className="gradient-text">Technical</span> Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Creative skills */}
          <div className="section-fade glass-card rounded-2xl p-8 border border-white/8 shadow-glass">
            <h3 className="font-orbitron text-lg font-bold mb-8 text-foreground">
              <span className="gradient-text">Creative</span> Skills
            </h3>
            <div className="space-y-6">
              {creativeSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            {/* Tech badges */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-muted-foreground mb-4 font-mono tracking-wider">TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Express", "Python", "TailwindCSS", "C++", "Git", "Figma", "Premiere Pro"].map((tech) => (
                  <span key={tech} className="glass-card px-3 py-1 rounded-full text-xs border border-primary/20 text-primary/80 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
