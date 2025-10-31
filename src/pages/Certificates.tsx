import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import doomSilhouette from "@/assets/doom-silhouette.png";

const certificates = [
  {
    title: "Google Cloud Career Launchpad Cloud Engineer track",
    issuer: "Google Cloud",
    date: "2024",
    pdf: "/Google  sajjala siddardha (1).pdf.pdf",
  },
  {
    title: "ML-CONNECT",
    issuer: "SAGI RAMA KRISHNAM RAJU ENGINEERING COLLEGE",
    date: "2023",
    pdf: "/mlconnectcer.pdf",
  },
  {
    title: "AI Advance",
    issuer: "Hexart.In",
    date: "2024",
    pdf: "/AI_Advance-Sajjala_siddardha.pdf",
  },
  {
    title: "AI Foundation",
    issuer: "Hexart.In",
    date: "2024",
    pdf: "AI_Foundation-Sajjala_siddardha.pdf",
  },
  {
    title: "AI Tools",
    issuer: "be10X",
    date: "2024",
    pdf: "ben10xcertification.pdf",
  },
  {
    title: "ChatGPT/Generative AI.",
    issuer: " International Institute of Digital Technologies",
    date: "2024",
    pdf: "/SAJJALA SIDDARDHA (3).pdf",
  },
  {
    title: "Java Full Stack Development",
    issuer: " Blackbuck Engineers",
    date: "2025",
    pdf: "/Sajjala Siddardha (1).pdf",
  },
  {
    title: "Chatpt for Everyone",
    issuer: "Guvi",
    date: "2024",
    pdf: "/CHATGPT CERTIFICATION.png",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "2024",
    pdf: "/Sajjala siddardh - Intro to Machine Learning.png",
  },
  {
    title: "Into to Programming",
    issuer: "Kaggle",
    date: "2024",
    pdf: "/Sajjala siddardh - Intro to Programming.png",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "2024",
    pdf: "/Sajjala siddardh - Python.png",
  },
 
];

const Certificates = () => {
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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
              <span className="text-accent">Certificates</span> & Achievements
            </h1>
            <p
              className="text-xl text-muted-foreground mb-12 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Professional certifications and accomplishments
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card
                    className="p-6 bg-card/40 backdrop-blur-sm border-primary/50 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.2)] animate-fade-in cursor-pointer"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg border border-primary/50 group-hover:border-accent transition-all">
                        <Award className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                        <p className="text-sm text-primary mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Certificates;
