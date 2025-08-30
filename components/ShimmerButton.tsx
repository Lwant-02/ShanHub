"use client";
import Link from "next/link";
import React from "react";

const colors = {
  green: "#67c090",
  orange: "#fe7743",
};

interface ShimmerButtonProps {
  text: string;
  color: keyof typeof colors;
  link?: string;
}
export default function ShimmerButton({
  text,
  color = "green",
  link,
}: ShimmerButtonProps) {
  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;
  return (
    // Main container to center the button on the page
    <div className="flex items-center justify-center">
      <style>{customCss}</style>
      <Link
        href={link || "#"}
        className="relative inline-flex items-center justify-center p-[1.5px]  rounded-full overflow-hidden group cursor-pointer"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from var(--angle), transparent 25%, ${colors[color]}, transparent 50%)`,
            animation: "shimmer-spin 2.5s linear infinite",
          }}
        />
        <span className="text-lg font-medium relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 bg-black/90 rounded-full shadow-green-500/50  ">
          {text}
        </span>
      </Link>
    </div>
  );
}
