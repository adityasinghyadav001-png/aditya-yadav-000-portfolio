import { useEffect, useRef } from "react";
import { ExternalLink, Github, Youtube, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Modern responsive portfolio with dark glassmorphism design, smooth scroll animations, and premium UI/UX.",
    tags: ["React", "TailwindCSS", "TypeScript"],
    type: "Web",
    live: "#",
    color: "hsl(195 100% 50%)",
  },
  {
    title: "Café Landing Site",
    description: "Stylish, food-focused landing page with warm aesthetics, menu showcase, and responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Web",
    live: "#",
    color: "hsl(30 100% 60%)",
  },
  {
    title: "Architect Landing Site",
    description: "Professional, minimal portfolio for an architecture firm — clean layout with elegant typography.",
    tags: ["React", "CSS"],
    type: "Web",
    live: "#",
    color: "hsl(265 80% 55%)",
  },
  {
    title: "YouTube Tech Content",
    description: "Tech tutorials, innovation insights, and development walkthroughs — building a growing community.",
    tags: ["Content Creation", "Video", "YouTube"],
    type: "YouTube",
    live: "https://youtu.be/7FzOQZulmms",
    color: "hsl(0 80% 55%)",
    isYoutube: true,
  },
];

const ProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="relative py-32 px-6">
      {/* BG orb */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(195 100% 50%), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 section-fade">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">04 / Projects</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text">Portfolio</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-inter">
            A showcase of projects built with passion, precision, and modern technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="section-fade glass-card rounded-2xl border border-white/8 overflow-hidden group hover:border-white/15 hover:shadow-glow-mixed transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card header gradient bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

              <div className="p-6">
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{ background: `${project.color}1a`, color: project.color, border: `1px solid ${project.color}30` }}
                  >
                    {project.type}
                  </span>
                  {project.isYoutube ? (
                    <Youtube size={18} style={{ color: project.color }} />
                  ) : (
                    <ExternalLink size={16} className="text-muted-foreground" />
                  )}
                </div>

                <h3 className="font-orbitron text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 font-inter leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md glass-card border border-white/5 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                  style={{ color: project.color }}
                >
                  {project.isYoutube ? "Watch Video" : "View Live"}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube featured embed */}
        <div className="mt-10 section-fade glass-card rounded-2xl border border-white/8 p-6 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Youtube size={18} className="text-red-400" />
            <span className="font-orbitron text-sm font-semibold text-foreground">Featured Video</span>
          </div>
          <div className="rounded-xl overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/7FzOQZulmms"
              title="Aditya Yadav — Featured YouTube Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
