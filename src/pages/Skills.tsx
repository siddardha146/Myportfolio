import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import doomSilhouette from "@/assets/doom-silhouette.png";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "R",],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML","CSS","React", "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Github","Vercel","Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code"],
  },
];

const Skills = () => {
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
              Technical <span className="text-accent">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              My expertise across various technologies and domains
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/40 backdrop-blur-sm border-primary/50 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.2)] animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold text-accent mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary/20 text-foreground rounded-lg border border-primary/50 hover:border-accent hover:bg-primary/30 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
