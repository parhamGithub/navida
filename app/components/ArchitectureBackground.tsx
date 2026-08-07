"use client";

import { memo } from "react";

const ArchitectureBackground = memo(function ArchitectureBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      {/* Ambient glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.035),transparent_55%)]
        "
      />

      {/* Architectural grid */}
      <div
        className="
          absolute inset-[-10%]
          opacity-[0.12]
          bg-[linear-gradient(rgba(212,175,55,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.13)_1px,transparent_1px)]
          bg-size-[100px_100px]
          transform-[perspective(900px)_rotateX(55deg)_scale(1.5)]
          transform-origin-[center_bottom]
        "
      />

      {/* Blueprint */}
      <svg
        viewBox="0 0 700 500"
        xmlns="http://www.w3.org/2000/svg"
        className="
          absolute
          left-1/2
          top-1/2
          h-auto
          w-175
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
          opacity-[0.18]
          sm:w-175
          max-sm:w-125
        "
      >
        {/* Outer building */}
        <rect
          x="100"
          y="100"
          width="500"
          height="300"
          pathLength="1"
          className="architecture-line"
        />

        {/* Horizontal division */}
        <line
          x1="100"
          y1="220"
          x2="600"
          y2="220"
          pathLength="1"
          className="architecture-line architecture-delay-1"
        />

        {/* Vertical division */}
        <line
          x1="300"
          y1="100"
          x2="300"
          y2="400"
          pathLength="1"
          className="architecture-line architecture-delay-2"
        />

        {/* Room */}
        <line
          x1="470"
          y1="220"
          x2="470"
          y2="400"
          pathLength="1"
          className="architecture-line architecture-delay-3"
        />

        {/* Entrance */}
        <path
          d="M 280 400 L 280 340 L 420 340 L 420 400"
          pathLength="1"
          className="architecture-line architecture-delay-2"
        />

        {/* Central architectural element */}
        <rect
          x="330"
          y="145"
          width="90"
          height="45"
          pathLength="1"
          className="architecture-line architecture-delay-3"
        />
      </svg>

      {/* Golden light sweep */}
      <div
        className="
          absolute
          -left-62.5
          top-0
          h-full
          w-45
          skew-x-[-15deg]
          bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.025),rgba(255,220,120,0.08),rgba(212,175,55,0.025),transparent)]
          architecture-light
        "
      />
    </div>
  );
});

export default ArchitectureBackground;