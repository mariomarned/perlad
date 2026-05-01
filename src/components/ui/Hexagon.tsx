import { cn } from "@/lib/utils";
 
interface HexagonProps {
  children?: React.ReactNode;
  size?: number;
  bg?: string;
  className?: string;
  style?: React.CSSProperties;
}
 
export const Hexagon = ({ children, size = 120, bg = '#94C11F', className, style }: HexagonProps) => (
  <div 
    className={cn("flex items-center justify-center shrink-0", className)} 
    style={{
      width: size, 
      height: size,
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      background: bg,
      ...style
    }}
  >
    {children}
  </div>
);
