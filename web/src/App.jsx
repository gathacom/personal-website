import { useEffect, useState } from "react";
import Header from "./components/Fragments/Header";
import MetaButton from "./components/Fragments/MetaButton";
import ProfileCard from "./components/Fragments/ProfileCard";
import { BackgroundBeams } from "./components/ui/background-beams";
import TabsDemo from "./components/Fragments/ContentTabs";
// import { Button } from "./components/ui/button"

const App = () => {
  const [isDark, setIsDark] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);
    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

  return (
    <>
      <Header></Header>
      <div className="w-full h-screen relative flex flex-row items-center ps-24 antialiased">
        <ProfileCard></ProfileCard>
        <TabsDemo></TabsDemo>
      </div>
      <BackgroundBeams isDark={isDark} />
    </>
  );
};

export default App;

{
  /* <Typewriter></Typewriter> */
}
{
  /* <div className="flex flex-col justify-center items-center gap-3 relative z-10">
          <MetaButton className="relative">Button</MetaButton>
          <MetaButton>Submit</MetaButton>
          <MetaButton>Delete</MetaButton>
        </div> */
}
