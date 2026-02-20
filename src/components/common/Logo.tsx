"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  arrowColor?: string;
}

/**
 * PnP Wears Custom Stylized Logo
 * Mimics the blocky, interlocking "PNP" typography from the reference.
 * Includes a stylized arrow pointing right.
 */
const Logo = ({
  className = "",
  size = 40,
  textColor = "currentColor",
  arrowColor = "white"
}: LogoProps) => {
  const width = size * 3;

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={width}
        height={size}
        viewBox="0 0 160 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Blocky PNP Group */}
        <g fill={textColor}>
          {/* First P */}
          <path d="M10 5H50V35H22V55H10V5ZM22 15V25H38V15H22Z" />

          {/* N - Interlocked with first P */}
          <path d="M45 5H57L85 35V5H97V55H85L57 25V55H45V5Z" />

          {/* Second P - Interlocked with N */}
          <path d="M92 5H132V35H104V55H92V5ZM104 15V25H120V15H104Z" />
        </g>

        {/* The Stylized Arrow */}
        <path
          d="M0 20H25M25 20L18 13M25 20L18 27"
          stroke={arrowColor}
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
};

export default Logo;
