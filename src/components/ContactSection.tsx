import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Instagram, Youtube, Linkedin, Github, Copy, Check, Send } from "lucide-react";

const socialLinks = [
  {
    icon: <Instagram size={20} />,
    label: "Instagram",
    value: "@adityakvideos",
    href: "https://www.instagram.com/adityakvideos_",
    color: "hsl(330 80% 60%)",
  },
  {
    icon: <Youtube size={20} />,
    label: "YouTube",
    value: "@Adityakvideos-o4t",
    href: "https://www.youtube.com/@Adityakvideos-o4t",
    color: "hsl(0 80% 55%)",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "adityayadav001",
    href: "https://www.linkedin.com/in/adityayadav001/",
    color: "hsl(210 80% 55%)",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "adityaonline000-bot",
    href: "https://github.com/adityaonline000-bot",
    color: "hsl(0 0% 85%)",
  },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("Adityaonline000@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs.sendForm(
    "service_gs8okpn",   // <-- yaha apna service id
    "template_0tnceag",  // <-- yaha template id
    formRef.current,
    "G42exIp8UKUceAia7"    // <-- yaha public key
  )
  .then(() => {
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    formRef.current?.reset();
    setTimeout(() => setSent(false), 3000);
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send message ❌");
  });
};

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(265 80% 55%), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 section-fade">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">05 / Contact</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold gradient-text">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 font-inter">Let's build something amazing together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="section-fade space-y-6">
            {/* Email */}
            <div className="glass-card rounded-2xl p-6 border border-white/8 group hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                  <Mail size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="text-sm text-foreground truncate">Adityaonline000@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg glass-card border border-white/8 hover:border-primary/30 transition-all duration-200"
                  title="Copy email"
                >
                  {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} className="text-muted-foreground" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            {["9519429362", "9919274408"].map((phone) => (
              <div key={phone} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
                    <Phone size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-sm text-foreground">+91 {phone}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6 border border-white/8 space-y-4">
              <h3 className="font-orbitron text-sm font-semibold text-foreground mb-4">Social Media</h3>
              {socialLinks.map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:opacity-90 transition-opacity duration-200"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}18`, border: `1px solid ${color}30`, color }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors duration-200">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="section-fade">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 border border-white/8 shadow-glass space-y-6"
            >
              <h3 className="font-orbitron text-lg font-bold gradient-text mb-2">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-mono tracking-wider">NAME</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full glass-card rounded-xl px-4 py-3 text-sm text-foreground border border-white/8 focus:border-primary/40 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/40"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-mono tracking-wider">EMAIL</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full glass-card rounded-xl px-4 py-3 text-sm text-foreground border border-white/8 focus:border-primary/40 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/40"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-mono tracking-wider">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full glass-card rounded-xl px-4 py-3 text-sm text-foreground border border-white/8 focus:border-primary/40 focus:outline-none transition-all duration-300 resize-none placeholder:text-muted-foreground/40"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-glow-blue hover:scale-[1.02]"
                style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}
              >
                {sent ? (
                  <>
                    <Check size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © 2025 <span className="text-primary">Aditya Yadav</span>. Crafted with passion & precision.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
