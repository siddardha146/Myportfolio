import venomLogo from "@/assets/ven.jpg";
import { Link } from "react-router-dom";

export const VenomIcon = () => {
  return (
    <Link
      to="/"
      className="fixed top-6 left-6 z-50 cursor-pointer group transition-all"
    >
      <img
        src={venomLogo}
        alt="Venom Logo"
        className="w-16 h-16 object-contain transition-all duration-300 opacity-90
          group-hover:opacity-100 group-hover:filter group-hover:brightness-150
          group-hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]"
      />
    </Link>
  );
};

export default VenomIcon;
