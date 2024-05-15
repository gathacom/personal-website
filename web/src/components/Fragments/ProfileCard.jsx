import React from "react";
import { Typewriter } from "../Elements/TypeWriter";
import SocialMedia from "../Elements/SocialMedia";
import { useScreenSize } from "@/hooks/useScreenSize";

const ProfileCard = () => {
  const screenSize = useScreenSize();
  return (
    <>
      <div className="flex justify-center min-w-72 h-80 bg-primary dark:bg-secondary/35 rounded-xl relative z-10 p-3">
        <div className="w-36 h-36 rounded-full flex justify-center absolute -top-[25%] ">
          <img
            src="./images/profile-1.jpeg"
            alt=""
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3
            className="scroll-m-20 text-2xl font-bold tracking-tight mt-16 text-transparent
            bg-clip-text bg-gradient-to-r from-secondary to-emerald-500 dark:bg-gradient-to-br dark:from-primary  dark:to-emerald-500"
          >
            <span className="flex flex-col justify-center items-center">
              Yoga Agatha <span>Pasaribu</span>{" "}
            </span>
            
          </h3>
          <Typewriter></Typewriter>
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
