import { cn } from "@/lib/utils";

interface DiamondProps {
  children?: React.ReactNode;
  size?: number;
  bg?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Diamond = ({ children, size = 120, bg = '#94C11F', className, style }: DiamondProps) => (
  <div 
    className={cn("flex items-center justify-center", className)} 
    style={{
      width: size, 
      height: size,
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      background: bg,
      ...style
    }}
  >
    {children}
  </div>
);
