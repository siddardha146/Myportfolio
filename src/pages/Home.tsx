import { Download, Home, Code, FolderGit2, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useState } from "react";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4";

const roles = [
  "AI Engineer",
  "ML Engineer",
  "Web Developer",
  "Data Scientist",
  "Data Analyst",
];

const HomePage = () => {
  const typingText = useTypingEffect(roles);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={venomVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container mx-auto px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="space-y-10 animate-fade-in">
                {/* Intro Text */}
                <div className="space-y-6">
                  <h1 className="text-6xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    Hi, I'm{" "}
                    <span className="text-[#9d65c9] drop-shadow-[0_0_6px_#9d65c9]">
                      Sajjala Siddardha
                    </span>
                  </h1>

                  <div className="text-2xl font-semibold text-[#d0a7f5] h-8 drop-shadow-[0_0_4px_#d0a7f5]">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </div>

                  <div className="space-y-4 text-lg text-gray-300">
                    <p>Building scalable applications with precision.</p>
                    <p>Turning chaotic data into meaning.</p>
                    <p>Exploring depths of machine intelligence.</p>
                    <p>
                      And I'm the <span className="italic">Universal Coder</span> 🕸️
                    </p>
                  </div>
                </div>

                {/* Resume Button */}
                <a href="/siddardha_resume.pdf" download>
                  <Button
                    size="lg"
                    className="mt-4 group bg-[#7b2cbf] hover:bg-[#b5179e] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[0_0_30px_#b5179e] transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Right Side Navigation Icons */}
              <div className="hidden lg:flex flex-col items-center justify-center space-y-8">
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#b5179e] transition-colors duration-300"
                >
                  <Home className="w-10 h-10 hover:drop-shadow-[0_0_10px_#b5179e]" />
                </a>
                <a
                  href="/skills"
                  className="text-gray-300 hover:text-[#7b2cbf] transition-colors duration-300"
                >
                  <Code className="w-10 h-10 hover:drop-shadow-[0_0_10px_#7b2cbf]" />
                </a>
                <a
                  href="/projects"
                  className="text-gray-300 hover:text-[#b5179e] transition-colors duration-300"
                >
                  <FolderGit2 className="w-10 h-10 hover:drop-shadow-[0_0_10px_#b5179e]" />
                </a>
                <a
                  href="/certificates"
                  className="text-gray-300 hover:text-[#7b2cbf] transition-colors duration-300"
                >
                  <Award className="w-10 h-10 hover:drop-shadow-[0_0_10px_#7b2cbf]" />
                </a>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-[#b5179e] transition-colors duration-300"
                >
                  <Mail className="w-10 h-10 hover:drop-shadow-[0_0_10px_#b5179e]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Venom Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#b5179e] rounded-full animate-float opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
