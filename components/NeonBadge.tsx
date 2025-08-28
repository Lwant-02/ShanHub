interface CustomBadgeProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: React.ReactNode | string | undefined | (() => void);
}
interface NeonBadgeProps extends CustomBadgeProps {
  color?: "blue" | "purple" | "pink" | "green" | "orange" | "red";
}
export const NeonBadge = ({
  children,
  color = "blue",
  className = "",
  ...props
}: NeonBadgeProps) => {
  const colors = {
    blue: "shadow-blue-500/50 border-blue-400/50 text-blue-300",
    purple: "shadow-purple-500/50 border-purple-400/50 text-purple-300",
    pink: "shadow-pink-500/50 border-pink-400/50 text-pink-300",
    green: "shadow-green-500/50 border-green-400/50 text-green-300",
    orange: "shadow-orange-500/50 border-orange-400/50 text-orange-300",
    red: "shadow-red-500/50 border-red-400/50 text-red-300",
  };

  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-md bg-black/40 border-2 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
