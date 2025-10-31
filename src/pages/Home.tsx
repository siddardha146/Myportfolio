import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import doomMagic from "@/assets/doom-magic.gif";
import doomSilhouette from "@/assets/doom-silhouette.png";

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Web Developer",
  "Data Analyst",
  "DL Engineer",
  "AI Engineer"
];

const Home = () => {
  const typingText = useTypingEffect(roles);

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f1a] via-[#0f2e28] to-[#081812]" />
        
        {/* Doom Silhouette Background */}
        <div
          className="absolute right-0 top-0 h-full w-3/4 bg-no-repeat bg-contain bg-right opacity-30"
          style={{
            backgroundImage: `url(${doomSilhouette})`,
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
          }}
        />

        {/* Magic energy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-magic-shimmer bg-[length:200%_100%]" />

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
                 alt="Dr. Doom Magic"
                className="w-full h-full object-contain animate-float"
              style={{ animationDuration: "6s", animationTimingFunction: "ease-in-out" }}/>
</div>


                {/* Intro Text */}
                <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h1 className="text-6xl font-bold text-foreground leading-tight">
                    Hi, I'm <span className="text-accent">Sajjala Siddardha</span>
                  </h1>
                  
                  <div className="text-2xl text-primary font-semibold h-8">
                    {typingText}<span className="animate-pulse">|</span>
                  </div>
                  
                  <div className="space-y-3 text-lg text-muted-foreground">
                    <p className="flex items-center gap-2">
                      🚀 I'm passionate about turning data into insights...
                    </p>
                    <p className="flex items-center gap-2">
                      📊 Crafting models that make a difference!
                    </p>
                    <p className="flex items-center gap-2">
                      🔍 Exploring data science to unlock hidden patterns.
                    </p>
                    <p className="flex items-center gap-2">
                      🌐 Building web apps that are both functional and fun!
                    </p>
                    <p className="flex items-center gap-2">
                      💻 And I'm the universal coder
                    </p>
                    <p className="flex items-center gap-2">
                      🎯 Focused on delivering optimal solutions.
                    </p>
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[0_0_30px_hsl(120_100%_50%/0.4)] transition-all duration-300">
                    <a
                    href="/siddardha_resume.pdf"
                    download="siddardha_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"></a>
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </div>
              </div>

              {/* Right side - Additional visual space */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Magical particle effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-float opacity-40"
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

export default Home;
