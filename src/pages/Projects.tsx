import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import doomSilhouette from "@/assets/doom-silhouette.png";

const projects = [
  {
    title: "Watch Wave",
    description: "A sleek movie streaming interface to explore trending and top-rated films using real-time API data. Built for a cinematic and smooth user experience.",
    tech: ["HTML", "CSS", "JavaScript", "TMDB API"],
    code: "https://siddardha146.github.io/watch-wave/home.html", // 🔗 your GitHub repo
    demo: "https://watchwave-delta.vercel.app/home.html", // optional demo link (or remove if none)
  },
  {
    title: "Movie Interface",
    description: "An interactive web app to browse, organize, and manage favorite movies with dynamic filtering and a modern UI..",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/siddardhagamhttps://siddardha146.github.io/movies-website/netflix.html",
    demo: "https://movies-interface-pink.vercel.app/netflix.html",
  },
  
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f1a] via-[#0f2e28] to-[#081812]" />

        {/* Doom Silhouette */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-contain bg-right opacity-10"
          style={{ backgroundImage: `url(${doomSilhouette})` }}
        />

        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
              My <span className="text-accent">Projects</span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-12 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Showcasing my work in AI, data science, and full-stack development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group p-6 bg-card/40 backdrop-blur-sm border-primary/50 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.2)] animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/50"
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
                      className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
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
