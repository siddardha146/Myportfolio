import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4";

const projects = [
  {
    title: "Email Spam & Phishing Detector",
    description:
      "An AI-powered security tool that detects spam emails, analyzes phishing URLs, scans QR text, and generates a unified risk score with an interactive visual dashboard.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Plotly"],
    code: "https://github.com/sajjala-siddardha/email-spam-detector",
    demo: "https://email-spam-detector-score.streamlit.app/",
  },
  {
    title: "Solo Leveling Training System",
    description:
      "A gamified Solo Leveling–inspired training app featuring quests, leveling, inventory, gear system, AI System consultant, penalty mode, SFX, and dark-themed UI. Built using React, TypeScript, Vite, and Gemini AI.",
    tech: ["React", "TypeScript", "Vite", "Gemini AI", "TailwindCSS"],
    code: "https://github.com/sajjala-siddardha/Solo-Leveling-Training-System",
    demo: "https://solo-leveling-levelup.vercel.app/",
  },
  {
    title: "Watch Wave",
    description:
      "A sleek movie streaming interface to explore trending and top-rated films using real-time API data. Built for a cinematic and smooth user experience.",
    tech: ["HTML", "CSS", "JavaScript", "TMDB API"],
    code: "https://github.com/sajjala-siddardha/watchwave",
    demo: "https://watchwave-watch.vercel.app/home.html",
  },
  {
    title: "Movie Interface",
    description:
      "An interactive web app to browse, organize, and manage favorite movies with dynamic filtering and a modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/siddardha146/movies-website",
    demo: "https://movies-interface-pink.vercel.app/netflix.html",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden text-white">
        {/* Venom Video Background */}
        <video
          src={venomVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6">
              My <span className="text-red-500">Projects</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              Showcasing my work in full-stack development and interactive UI designs.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group p-6 bg-black/40 backdrop-blur-sm border border-red-600/40 hover:border-red-500 transition-all duration-300 hover:shadow-[0_0_25px_#ff0000] cursor-pointer"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-red-600/30 text-red-300 text-sm rounded-full border border-red-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
