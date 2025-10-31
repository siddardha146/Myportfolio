import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="min-h-screen w-full animate-fade-in">
      {children}
    </div>
  );
};
