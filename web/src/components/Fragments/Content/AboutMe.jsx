import React from "react";

const AboutMe = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-emerald-500">About Me . </h1>
      <p className="text-xl font-bold">Hi Buddy👻</p>
      <div className="flex flex-row gap-3 p-5">
        <div className="w-[70%] text-lg font-normal">
          <p className="">
            I'm a <span className="highlight-text">Informatics</span> student at
            UPN 'Veteran' Yogyakarta.
          </p>
          <p>
            I like to learn more about{" "}
            <span className="highlight-text">Web Development</span> and{" "}
            <span className="highlight-text">Javascript</span> is my main
            programming language.
          </p>
          <p>
          Besides that, I also like playing <span className="highlight-text">Basketball </span>
          and games like <span className="highlight-text">League of Legends</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
