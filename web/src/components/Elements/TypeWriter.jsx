"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "I'm",
      className: "text-secondary dark:text-primary",
    },
    {
      text: "Fullstack Web Developer",
      className: "text-emerald-400 dark:text-emerald-400",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[2rem] ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}