"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";

interface LogoProps {
  className?: string;
  forceWhite?: boolean;
}

export function Logo({ className = "h-8 w-auto", forceWhite = false }: LogoProps) {
  const { theme } = useTheme();

  const src =
    forceWhite || theme === "dark" ? "/Sysogen_white_logo.png" : "/Sysogen_dark_logo.png";

  return (
    <Image
      src={src}
      alt="Sysogen"
      height={36}
      width={140}
      className={className}
      priority
    />
  );
}
