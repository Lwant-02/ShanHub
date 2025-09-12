import { cn } from "@/lib/utils";

interface GradientTitleProps {
  title: string;
  className?: string;
}

export const GradientTitle = ({ title, className }: GradientTitleProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent",
        className
      )}
    >
      {title}
    </span>
  );
};
