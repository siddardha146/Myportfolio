import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4"; // ✅ Video import

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

        {/* 🎬 Venom Video Background */}
        <video
          src={venomVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-80" // ✅ better visibility
        />

        {/* 🚫 Removed white over-gradient to make video clear */}

        {/* Content Container */}
        <div className="relative z-10 flex min-h-screen items-center bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                
                {/* Intro Text */}
                <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h1 className="text-6xl font-bold text-white leading-tight">
                    Hi, I'm <span className="text-red-600">Sajjala Siddardha</span>
                  </h1>

                  <div className="text-2xl font-semibold text-gray-300 h-8">
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

                {/* ✅ Resume Button with spacing below */}
                <div className="pt-6"> {/* added padding above button */}
                  <a href="/siddardha_resume.pdf" download>
                    <Button
                      size="lg"
                      className="group bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300"
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right side - reserved for future content */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
