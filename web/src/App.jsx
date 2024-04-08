import { useEffect, useRef, useState } from "react";
import Header from "./components/Fragments/Header";
import MetaButton from "./components/Fragments/MetaButton";
import ProfileCard from "./components/Fragments/ProfileCard";
import { BackgroundBeams } from "./components/ui/background-beams";
import ContentTabs from "./components/Fragments/ContentTabs";
import { useScreenSize } from "./hooks/useScreenSize";
import { GetToKnow } from "./components/Elements/GetToKnow";
// import { Button } from "./components/ui/button"

const App = () => {
  const tabsRef = useRef(null);
  const [isDark, setIsDark] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const screenSize = useScreenSize();
  const handleScroll = () => {
    tabsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header></Header>
      <div className="w-full relative flex flex-col lg:flex-row  px-10 md:ps-24">
        <div className="max-h-screen w-full lg:w-[35%] mt-48">
          <ProfileCard width={screenSize}></ProfileCard>
          {screenSize == "sm" && <GetToKnow onClick={handleScroll} />}
        </div>
        <div ref={tabsRef} className="w-full h-screen mt-32 lg:mt-24">
          <ContentTabs></ContentTabs>
        </div>
      </div>
      <BackgroundBeams isDark={isDark} />
    </>
  );
};

export default App;
