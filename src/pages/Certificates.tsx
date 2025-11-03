import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4"; // make sure to add this asset

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
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#100f18] via-[#200f28] to-[#080812]" />

        {/* Venom Silhouette */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-contain bg-right opacity-10"
          style={{ backgroundImage: `url(${venomSilhouette})` }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-100 mb-4">
              <span className="text-red-500">Certificates</span> & Achievements
            </h1>
            <p className="text-lg text-gray-400 mb-12">
              Showcasing my knowledge and growth across platforms and tools.
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
                    className="p-6 bg-opacity-30 backdrop-blur-lg border border-red-500/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_25px_#00ffae] cursor-pointer"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-red-500/20 rounded-md border border-red-500/70 group-hover:border-green-500">
                        <Award className="w-6 h-6 text-red-400 group-hover:text-green-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100 group-hover:text-green-300 transition-all">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400">{cert.issuer}</p>
                        <p className="text-sm text-red-500 mt-1">{cert.date}</p>
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
