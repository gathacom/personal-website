"use client";
import HeadContent from "@/components/Elements/HeadContent";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";

const TechStackAndTools = () => {
  const techstacks = [
    {
      id: 1,
      name: "Javascript",
      designation: "Competent",
      image: "./svg/javascript.svg",
    },
    {
      id: 2,
      name: "Typescript",
      designation: "Advance",
      image: "./svg/typescript.svg",
    },
    {
      id: 3,
      name: "ReactJs",
      designation: "Competent",
      image: "./svg/reactjs.svg",
    },
    {
      id: 4,
      name: "NextJs",
      designation: "Novice",
      image: "./svg/nextjswhite.svg",
    },
    {
      id: 5,
      name: "ExpressJs",
      designation: "Competent",
      image: "./svg/expressjs.svg",
    },
    {
      id: 6,
      name: "NodeJs",
      designation: "Competent",
      image: "./svg/nodejs.svg",
    },
    {
      id: 7,
      name: "HTML",
      designation: "Competent",
      image: "./svg/html.svg",
    },
    {
      id: 8,
      name: "CSS",
      designation: "Competent",
      image: "./svg/css.svg",
    },
    {
      id: 9,
      name: "Tailwind",
      designation: "Competent",
      image: "./svg/tailwind.svg",
    },
    {
      id: 10,
      name: "MongoDB",
      designation: "Competent",
      image: "./svg/mongodb.svg",
    },
    {
      id: 11,
      name: "MySQL",
      designation: "Competent",
      image: "./svg/mysql.svg",
    },
    {
      id: 12,
      name: "Prisma",
      designation: "Novice",
      image: "./svg/prisma.svg",
    },
    {
      id: 13,
      name: "VSCode",
      designation: "Competent",
      image: "./svg/vscode.svg",
    },
    {
      id: 14,
      name: "Github",
      designation: "Competent",
      image: "./svg/github.svg",
    },
    {
      id: 15,
      name: "Git",
      designation: "Advance",
      image: "./svg/git.svg",
    },
  ];
  return (
    <>
      <HeadContent>TechStack & Tools </HeadContent>
      <p className="ms-5 mt-5 text-base font-base">
        Here is the techstack and tools that I'm currently using
      </p>
        <div className="grid grid-cols-3 md:grid-cols-5 md:ps-5 pt-5 gap-7 items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={techstacks} />
        </div>
    </>
  );
};

export default TechStackAndTools;
