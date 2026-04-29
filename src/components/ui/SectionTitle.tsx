import { Diamond } from "./Diamond";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  sub?: string;
  light?: boolean;
  accentColor?: string;
}

export const SectionTitle = ({ children, sub, light = false, accentColor = '#94C11F' }: SectionTitleProps) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-4 mb-4">
      <Diamond size={16} bg={accentColor} />
      <h2 className={cn(
        "font-display text-3xl md:text-5xl font-bold tracking-tight",
        light ? "text-white" : "text-brand-dark"
      )}>
        {children}
      </h2>
      <Diamond size={16} bg={accentColor} />
    </div>
    {sub && (
      <p className={cn(
        "font-sans text-sm md:text-lg max-w-2xl mx-auto",
        light ? "text-white/70" : "text-gray-600"
      )}>
        {sub}
      </p>
    )}
  </div>
);
