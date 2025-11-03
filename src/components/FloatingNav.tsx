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
            className={`group relative transition-all duration-300 animate-slide-in-right`}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div
              className={`
                w-14 h-14 rounded-full flex items-center justify-center border-2 backdrop-blur-md
                transition-all duration-300 shadow-lg
                ${isActive
                  ? "bg-[hsl(270,100%,50%)/0.4] border-[hsl(135,80%,55%)] shadow-[0_0_25px_hsl(270,100%,50%/0.8)] scale-110"
                  : "bg-[hsl(260,15%,12%)/0.4] border-[hsl(270,100%,50%)] hover:border-[hsl(135,80%,55%)] hover:shadow-[0_0_20px_hsl(135,80%,55%/0.5)] hover:scale-110"}
              `}
            >
              <Icon
                className={`
                  w-6 h-6 transition-colors duration-300
                  ${isActive
                    ? "text-[hsl(135,80%,55%)] drop-shadow-[0_0_5px_hsl(135,80%,55%/0.7)] animate-pulse"
                    : "text-white group-hover:text-[hsl(135,80%,55%)]"}
                `}
              />
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-4 py-2 rounded-lg border border-[hsl(135,80%,55%)/0.6] bg-[hsl(260,14%,10%)/0.8] text-white shadow-[0_0_10px_hsl(270,100%,50%/0.4)]">
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
