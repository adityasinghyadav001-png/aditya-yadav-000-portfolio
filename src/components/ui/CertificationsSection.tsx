const certifications = [
  {
    title: "Python for Everybody",
    issuer: "Coursera",
    year: "2024",
    link: "https://drive.google.com/file/d/1AFZdfVvQrwOJxu0g2QcKjcuY37f9pzPX/view?usp=drive_link", // pdf ya image path
  },
  {
    title: "Machine Learning Basics",
    issuer: "Udemy",
    year: "2025",
    link: "https://drive.google.com/file/d/1AFZdfVvQrwOJxu0g2QcKjcuY37f9pzPX/view?usp=drive_link",
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    year: "2024",
    link: "https://drive.google.com/file/d/1AFZdfVvQrwOJxu0g2QcKjcuY37f9pzPX/view?usp=drive_link", // external link
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-[var(--glass-bg)] backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300 block"
          >
            <h3 className="text-xl font-semibold mb-2">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400">
              {cert.issuer}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {cert.year}
            </p>
            <p className="text-blue-400 text-sm mt-4">
              View Certificate →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;