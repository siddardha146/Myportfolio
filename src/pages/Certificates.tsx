import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import venomSilhouette from "@/assets/venom-silhouette.jpg";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4";


const certificates = [
  {
    title: "Google Cloud Career Launchpad Cloud Engineer track",
    issuer: "Google Cloud",
    date: "2024",
    pdf: "/Google  sajjala siddardha (1).pdf",
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
    issuer: "International Institute of Digital Technologies",
    date: "2024",
    pdf: "/SAJJALA SIDDARDHA (3).pdf",
  },
  {
    title: "Java Full Stack Development",
    issuer: "Blackbuck Engineers",
    date: "2025",
    pdf: "/Sajjala Siddardha (1).pdf",
  },
  {
    title: "ChatGPT for Everyone",
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
    title: "Intro to Programming",
    issuer: "Kaggle",
    date: "2024",
    pdf: "/Sajjala siddardh - Intro to Programming.png",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "2024",
    pdf: "/Sajjala siddardh - Python (1).png",
  },
];

const Certificates = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden text-white">
        {/* Venom Video Background */}
        <video
          src={venomVideo}
          muted
          autoPlay
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        {/* Venom Silhouette */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-contain bg-right opacity-20 z-0"
          style={{ backgroundImage: `url(${venomSilhouette})` }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-widest mb-4">
              <span className="text-white/70">Certificates</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12">
              Highlights of my learning, achievements, and growth.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card
                    className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-[1.02] cursor-pointer"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-transparent rounded-md border border-white/40 group-hover:border-white/80 transition-all">
                        <Award className="w-6 h-6 text-white/70 group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-all">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400">{cert.issuer}</p>
                        <p className="text-sm text-white/60 mt-1">{cert.date}</p>
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
