"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface CustomButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const getButtonClassName = ({
  variant = "primary",
}: {
  variant: "primary" | "secondary";
}) => {
  if (variant === "primary") {
    return "px-8 py-3 bg-gradient-to-r cursor-pointer from-emerald-500 to-blue-600 text-white rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 font-medium border-none";
  } else {
    return "px-8 py-3 border-emerald-500/50 cursor-pointer text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 font-medium";
  }
};

export const CustomButton = ({
  text,
  icon,
  variant,
  className,
  link,
  onClick,
  disabled,
}: CustomButtonProps) => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      type="button"
      disabled={disabled}
      onClick={() => {
        if (link) router.push(link);
        if (onClick) onClick();
      }}
      className={`${getButtonClassName({ variant })} ${className} `}
    >
      {text}
      {icon}
    </Button>
  );
};
