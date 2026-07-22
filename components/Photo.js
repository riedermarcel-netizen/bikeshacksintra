"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useMediaQuery } from "./useMediaQuery";

const variants = {
  default: "bg-sand",
  olive: "bg-olive",
  forest: "bg-forest",
  charcoal: "bg-charcoal",
};

// A small, deliberate set of crops — every Photo picks one rather than
// an arbitrary height, so photography drops in without reflowing layout.
const ratios = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[3/2]",
  wide: "aspect-[16/9]",
};

const noise =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Max single-direction parallax travel, in pixels — desktop only.
const PARALLAX_RANGE = 22;

export default function Photo({
  src,
  alt,
  label,
  variant = "default",
  ratio,
  position,
  sizes = "100vw",
  className = "",
  animate = false,
}) {
  const isDark = variant !== "default";
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Always call the hook (rules of hooks) — its output is simply unused
  // when `animate` is false, or on mobile where parallax is disabled.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rawParallaxY = useTransform(scrollYProgress, [0, 1], [-PARALLAX_RANGE, PARALLAX_RANGE]);
  // A little inertia so the image settles behind the scroll rather than
  // tracking it mechanically 1:1 — the difference between a photograph
  // that drifts and one that's visibly wired to the scrollbar.
  const parallaxY = useSpring(rawParallaxY, { stiffness: 60, damping: 20, mass: 0.5 });

  const outerClass = `relative overflow-hidden w-full ${ratio ? ratios[ratio] : ""} ${src ? "" : variants[variant]} ${className}`;

  const image = src ? (
    <Image
      src={src}
      alt={alt || ""}
      fill
      sizes={sizes}
      className="object-cover"
      style={position ? { objectPosition: position } : undefined}
    />
  ) : (
    <>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: noise }}
      />
      <span
        className={`absolute left-0 bottom-0 p-4 md:p-5 text-[10px] tracking-[0.13em] uppercase max-w-[75%] ${
          isDark ? "text-warm-white/50" : "text-charcoal/40"
        }`}
      >
        {label}
      </span>
    </>
  );

  if (animate && src) {
    return (
      <div ref={containerRef} className={outerClass}>
        <motion.div
          className="absolute inset-x-0"
          style={{ top: "-8%", height: "116%", y: isDesktop ? parallaxY : 0 }}
        >
          <motion.div
            className="relative h-full w-full"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {image}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return <div className={outerClass}>{image}</div>;
}
