import Image from "next/image";
import type { CSSProperties } from "react";

type LogoProps = {
  className?: string;
  style?: CSSProperties;
  animated?: boolean;
  breathe?: boolean;
  reveal?: boolean;
};

export default function Logo({
  className,
  style,
  animated = false,
  breathe = false,
  reveal = false,
}: LogoProps) {
  const isAnimated = animated || reveal;

  const classes = [
    "logo",
    isAnimated ? "logo--animated" : "",
    reveal ? "logo--reveal" : "",
    breathe ? "logo--breathe" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} style={style}>
      <Image
        src="/Logo.svg"
        alt="نویدا"
        width={40}
        height={258}
        unoptimized
        draggable={false}
        className={`logo__img ${className}`}
      />
    </span>
  );
}