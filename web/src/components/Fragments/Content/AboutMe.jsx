import { Button } from "@/components/Elements/Button/Index";
import React from "react";
import MetaButton from "../MetaButton";
import HeadContent from "@/components/Elements/HeadContent";
import { FaFileDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
    <HeadContent>About Me .</HeadContent>
      <p className="text-xl font-bold">Hi Buddy👻</p>
      <div className="flex flex-col">
        <div className="flex flex-row gap-3 p-5 md:p-5">
          <div className="w-full md:w-[70%] text-base md:text-lg font-normal">
            <p className="">
              I'm a <span className="highlight-text">Informatics</span> student
              at UPN 'Veteran' Yogyakarta.
            </p>
            <p>
              I like to learn more about{" "}
              <span className="highlight-text">Web Development</span> and{" "}
              <span className="highlight-text">Javascript</span> is my main
              programming language.
            </p>
            <p>
              Besides that, I also like playing{" "}
              <span className="highlight-text">Basketball </span>
              and games like{" "}
              <span className="highlight-text">League of Legends</span>.
            </p>
          </div>
        </div>
        <MetaButton
          variant="secondary"
          classname="w-[50%] md:w-[25%] text-sm h-10 transition-all bg-gradient-to-br from-secondary to-emerald-500  shadow-lg shadow-foreground rounded-s-3xl"
          >
          Download CV <span className="ml-2"><FaFileDownload></FaFileDownload></span>
        </MetaButton>
      </div>
    </>
  );
};

export default AboutMe;
