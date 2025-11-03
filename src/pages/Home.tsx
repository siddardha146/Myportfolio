import { Download } from "lucide-react";
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

        {/* Dark gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container mx-auto px-6 md:px-8 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#e6e6e6]">
                  Hi, I'm{" "}
                  <span className="text-[#9013fe] font-bold venom-outline">
                    Sajjala Siddardha
                  </span>
                </h1>

                <div className="text-xl md:text-2xl font-semibold text-gray-300 h-8">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </div>

                <div className="space-y-4 text-base md:text-lg text-gray-200 leading-relaxed">
                  <p>Developing scalable systems with a Venomous touch.</p>
                  <p>Infusing intelligence into every line of code.</p>
                  <p>Feeding the machine with data and purpose.</p>
                  <p>
                    And I'm the{" "}
                    <span className="text-red-500 italic">Universal Coder</span>{" "}
                    🕸️
                  </p>
                </div>

                {/* Resume Button */}
                <a href="/siddardha_resume.pdf" download>
                  <Button
                    size="lg"
                    className="mt-4 bg-[#9b00d1] hover:bg-red-600 text-white font-semibold px-6 py-4 md:px-8 md:py-6 text-lg rounded-lg shadow-lg hover:shadow-[0_0_30px_#ff0000] transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Empty Right Side for spacing */}
              <div className="hidden lg:block w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
