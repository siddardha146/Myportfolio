import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import venomSilhouette from "@/assets/venom-silhouette.jpg";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4";

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
    skills: ["Github", "Vercel", "Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code"],
  },
];

const Skills = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden text-white">
        {/* Venom Video Background */}
        <video
          src={venomVideo}
          muted
          autoPlay
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        {/* Venom Silhouette */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-contain bg-right opacity-15 z-0"
          style={{ backgroundImage: `url(${venomSilhouette})` }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-widest mb-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
              Technical <span className="text-red-500">Skills</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              A showcase of my technical expertise and tools I frequently work with.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-[1.03] cursor-pointer"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-white/5 text-gray-200 rounded-lg border border-white/20 hover:border-white hover:bg-white/10 transition-all cursor-default"
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
