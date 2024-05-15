"use client";
 
import { Tabs } from "../ui/tabs";
import { FaTools, FaUserAstronaut, FaConnectdevelop, FaGithub } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";
import { useRef } from "react";
import AboutMe from "./Content/AboutMe";
import TechStackAndTools from "./Content/TechStackAndTools";
import Portfolio from "./Content/Portfolio";

export function ContentTabs({ tabsRef }) {
  const tabs = [
    {
      title: <FaUserAstronaut/>,
      value: "about",
      content: (
        <div className="content-tab">
          <AboutMe />
        </div>
      ),
    },
    {
      title: <FaTools/>,
      value: "techstack",
      content: (
        <div className="content-tab">
          <TechStackAndTools />
        </div>
      ),
    },
    {
      title: <SiPowerpages/>,
      value: "portfolio",
      content: (
        <div className="content-tab">
          <Portfolio />
        </div>
      ),
    },
    // {
    //   title: <FaConnectdevelop/>,
    //   value: "contact",
    //   content: (
    //     <div className="content-tab">
    //       <p>Content tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    // {
    //   title: <FaGithub/>,
    //   value: "github",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-secondary/50">
    //       <p>My Progress</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];
 
  return (
    <div ref={tabsRef} className="h-full md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-[100%] items-start justify-start my-10 lg:my-0 z-20 ">
      <Tabs tabs={tabs} />
    </div>
  );
}
 
const DummyContent = () => {
  return (
    <div className="w-full h-full">
        <h2>Content</h2>
    </div>
  );
};

export default ContentTabs