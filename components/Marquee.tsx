"use client";
import React, { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = false,
  className = "",
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const contentElement = contentRef.current;

    if (!marqueeElement || !contentElement) return;

    let animationId: number;
    let startTime: number;
    let isPaused = false;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      if (!isPaused) {
        const elapsed = currentTime - startTime;
        const contentWidth = contentElement.scrollWidth / 2; // Divide by 2 because we duplicate content
        const progress = ((elapsed * speed) / 1000) % contentWidth;

        const translateX =
          direction === "left" ? -progress : progress - contentWidth;
        contentElement.style.transform = `translateX(${translateX}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      if (pauseOnHover) isPaused = true;
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) isPaused = false;
    };

    if (pauseOnHover) {
      marqueeElement.addEventListener("mouseenter", handleMouseEnter);
      marqueeElement.addEventListener("mouseleave", handleMouseLeave);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (pauseOnHover) {
        marqueeElement.removeEventListener("mouseenter", handleMouseEnter);
        marqueeElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [speed, direction, pauseOnHover]);

  return (
    <div ref={marqueeRef} className={`overflow-hidden  ${className}`}>
      <div
        ref={contentRef}
        className="inline-flex"
        style={{ willChange: "transform" }}
      >
        <div className="flex gap-8 pr-8">{children}</div>
        <div className="flex gap-8 pr-8">{children}</div>
      </div>
    </div>
  );
};
