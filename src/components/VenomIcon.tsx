import venomLogo from "@/assets/ven.png";

export const VenomIcon = () => {
  return (
    <a
      href="/"
      className="fixed top-6 left-6 z-50 group"
      aria-label="Home"
    >
      <img
        src={venomLogo}
        alt="Venom Icon"
        className="
          w-28 h-28           /* Increased size: was w-20 h-20 */
          filter
          drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]
          transition-transform duration-300
          group-hover:scale-125
          group-hover:drop-shadow-[0_0_40px_rgba(255,0,0,0.8)]
        "
      />
    </a>
  );
};
