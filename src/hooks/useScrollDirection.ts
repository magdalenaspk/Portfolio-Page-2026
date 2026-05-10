"use client";

import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setDirection("up");
      } else if (currentY > lastY) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return direction;
}
