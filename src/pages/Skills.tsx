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
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "R"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    skills: ["GitHub", "Vercel", "Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code"],
  },
];

const Skills = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#1a0000] to-[#0a0000]" />

        {/* Doom Silhouette */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-contain bg-right opacity-10 z-0"
          style={{ backgroundImage: `url(${doomSilhouette})` }}
        />

        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Technical <span className="text-red-500">Skills</span>
            </h1>
            <p
              className="text-xl text-gray-400 mb-12 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              My expertise across various technologies and domains
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 bg-black/30 backdrop-blur-sm border border-red-500/30 hover:border-red-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-red-500">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-red-900/40 text-white rounded-lg border border-red-500/30 hover:border-red-500 hover:bg-red-900/60 transition-all cursor-default"
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
