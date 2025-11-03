import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import doomMagic from "@/assets/doom-magic.gif";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4"; // ✅ Import Venom video

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Web Developer",
  "Data Analyst",
  "DL Engineer",
  "AI Engineer",
];

const Home = () => {
  const typingText = useTypingEffect(roles);

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* ✅ Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={venomVideo} type="video/mp4" />
        </video>

        {/* Optional overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

        {/* Content Container */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container mx-auto px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Doom Magic Icon */}
                <div className="w-32 h-32 animate-float">
                  <img
                    src={doomMagic}
                    alt="Magic Animation"
                    className="w-full h-full object-contain animate-float"
                    style={{
                      animationDuration: "6s",
                      animationTimingFunction: "ease-in-out",
                    }}
                  />
                </div>

                {/* Intro Text */}
                <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h1 className="text-6xl font-bold text-white leading-tight">
                    Hi, I'm <span className="text-purple-500">Sajjala Siddardha</span>
                  </h1>

                  <div className="text-2xl text-purple-300 font-semibold h-8">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </div>

                  <div className="space-y-3 text-lg text-gray-300">
                    <p>I'm passionate about turning data into insights...</p>
                    <p>Crafting models that make a difference!</p>
                    <p>Exploring data science to unlock hidden patterns.</p>
                    <p>Building web apps that are both functional and fun! ✵</p>
                    <p>And I'm the universal coder</p>
                    <p>Focused on delivering optimal solutions.</p>
                  </div>
                </div>

                {/* Resume Download */}
                <a href="/siddardha_resume.pdf" download>
                  <Button
                    size="lg"
                    className="group bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(155,89,182,0.7)] transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Right side empty space */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
