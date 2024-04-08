import React from "react";

import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

import Button from "../Button";
import useIsMobile from "@/hooks/isMobile";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getUser } from "@/store/authSlice";

const Header = () => {
  const isMobile = useIsMobile();
  const user = useAppSelector(getUser);

  const handleNavigateToHero = () => {
    // TODO: Logic to navigate to the hero page
  };

  const handleNavigateToSignIn = () => {
    // TODO: Logic to navigate to the hero page
  };

  return (
    <div className="w-screen h-24 shadow-md sticky top-0 flex items-center justify-between bg-transparent z-10 pt-12 pb-5 pr-8">
      <Button link onClick={handleNavigateToHero} className="-ml-5">
        <Image
          src="/Logo.png"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
          alt="Logo"
          className="w-auto h-auto min-w-72"
        />
      </Button>
      <Button
        link
        onClick={handleNavigateToSignIn}
        className="flex items-center"
      >
        <FaRegUserCircle size={30} />
        {!isMobile && (
          <span className="text-white ml-2">
            {user?.name ?? "Entrar/Cadastrar"}
          </span>
        )}
      </Button>
    </div>
  );
};

export default Header;
