import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = (props) => {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (darkTheme) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    console.log(darkTheme);
  }, [darkTheme]);

  return (
    <>
      <div className="bg-transparent w-full flex justify-end absolute top-5 right-5 z-10">
        {/* <Button variant="icon" size="md" className="me-5" onClick={handleTheme} {...props}>
          {darkTheme ? (
            <MdDarkMode className="w-6 h-6" />
            ) : (
            <MdLightMode className="w-6 h-6" color="#18181b" />
          )}
        </Button> */}
      </div>
    </>
  );
};

export default Header;

