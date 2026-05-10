"use client";

import { useRef, useEffect } from "react";

export function OnboardingAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const start = () => {
      v.currentTime = 2;
      v.play().catch(() => {});
    };

    start();
    v.addEventListener("ended", start);
    return () => v.removeEventListener("ended", start);
  }, []);

  return (
    <video
      ref={videoRef}
      src="/images/projects/project-6/screens/onboarding-demo.mp4"
      muted
      playsInline
      className="w-full"
      style={{ maxWidth: 340, clipPath: "inset(5px)" }}
    />
  );
}
