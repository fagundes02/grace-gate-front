import React from "react";

import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "@/hooks/isMobile";

const Footer = () => {
  const isMobile = useIsMobile();

  const handleNavigateToHero = () => {
    // TODO: Logic to navigate to the hero page
  };

  return (
    <div
      className={`w-screen bottom-0 flex  justify-between bg-graceGreen z-10 p-8 ${
        isMobile ? "flex-col items-start" : "flex-row items-center"
      }`}
    >
      <Button
        link
        className="bg-graceBlack rounded h-20 flex items-center justify-center"
      >
        <Image src="/logo.png" alt="Logo" width={200} height={100} />
      </Button>
      <div className="flex justify-center mt-3 flex-col">
        <span className="text-graceBlack font-bold">Navegue</span>
        <Link href="/" className="text-graceBlack">
          Home
        </Link>
        <Link href="/events" className="text-graceBlack ">
          Eventos
        </Link>
        <Link href="/sign-in" className="text-graceBlack ">
          Entrar / Cadastrar
        </Link>
      </div>

      <div className="flex justify-center mt-3 flex-col">
        <span className="text-graceBlack font-bold">Contato</span>
        <span className="text-graceBlack">gracegateadm@gmail.com</span>
        <span className="text-graceBlack ">(41) 9 9961-5258</span>
      </div>

      <span className="text-graceBlack mt-3 text-sm">
        © 2024 Grace Gate. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
