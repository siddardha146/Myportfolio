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
          w-32 h-32
          filter
          drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]         /* Subtle black glow */
          transition-all duration-500
          group-hover:drop-shadow-[0_0_35px_rgba(0,0,0,1)] /* Stronger black glow on hover */
          group-hover:scale-125                         /* Smooth size increase on hover */
        "
      />
    </a>
  );
};
