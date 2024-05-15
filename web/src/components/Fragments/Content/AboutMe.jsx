import { Button } from "@/components/Elements/Button/Index";
import React, { useCallback } from "react";
import MainButton from "../MetaButton";
import HeadContent from "@/components/Elements/HeadContent";
import { FaFileDownload } from "react-icons/fa";

const AboutMe = () => {
  
  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a")
    link.href = "/file/Yoga Agatha Pasaribu-resume.pdf";
    link.download = "Yoga Agatha Pasaribu-resume.pdf";
    link.click();
  },[])

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
        <MainButton
          variant="secondary"
          classname="w-[75%] md:w-[50%] text-sm h-10 transition-all bg-gradient-to-br from-secondary to-emerald-500  shadow-lg shadow-foreground rounded-s-3xl mb-10"
          onClick={handleDownloadCV}
          
          >
          Download CV <span className="ml-2"><FaFileDownload></FaFileDownload></span>
        </MainButton>
      </div>
    </>
  );
};

export default AboutMe;
