import { Home, Code, Award, Wrench, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/projects", icon: Code, label: "Projects" },
  { path: "/certificates", icon: Award, label: "Certificates" },
  { path: "/skills", icon: Wrench, label: "Skills" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

export const FloatingNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className="group relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`
                w-14 h-14 rounded-full flex items-center justify-center
                backdrop-blur-sm border-2 transition-all duration-300
                ${
                  isActive
                    ? "bg-primary/30 border-accent shadow-[0_0_30px_hsl(120_100%_50%/0.5)]"
                    : "bg-card/20 border-primary/50 hover:border-accent hover:bg-primary/20"
                }
                hover:scale-110 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.4)]
                animate-slide-in-right
              `}
            >
              <Icon
                className={`w-6 h-6 transition-all duration-300 ${
                  isActive
                    ? "text-accent animate-glow-pulse"
                    : "text-foreground group-hover:text-accent"
                }`}
              />
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/50 whitespace-nowrap shadow-lg">
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
