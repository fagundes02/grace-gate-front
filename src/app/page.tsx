"use client";

import { Button } from "@/components";
import useIsMobile from "@/hooks/isMobile";
import Image from "next/image";

export default function Home() {
  const isMobile = useIsMobile();

  const handleNavigateToEvents = () => {
    // TODO: Logic to navigate to the events page
  };

  return (
    <main
      className={`flex min-h-screen w-full ${
        isMobile ? "justify-center" : "justify-between"
      }`}
    >
      <Image
        src="/logo.png"
        width={isMobile ? 300 : 400}
        height={isMobile ? 300 : 400}
        alt="Logo"
        className={`absolute top-0 w-auto h-auto ${
          isMobile ? "top-0 left-1/2 transform -translate-x-1/2" : "left-12"
        }`}
      />
      <div
        className={`min-h-screen flex flex-col justify-center  ${
          isMobile ? "w-full items-center" : "w-1/2 ml-28"
        }`}
      >
        <h1
          className={`font-bold text-white mb-4 ${
            isMobile ? "text-center text-4xl" : "text-start text-6xl"
          }`}
        >
          “Vocês me
          <br />
          procurarão e me
          <br />
          acharão quando
          <br />
          me procurarem de
          <br />
          todo o coração.”
        </h1>
        <span className="text-white mb-10">Jeremias 29: 13</span>
        <Button onClick={handleNavigateToEvents} outlined className="w-fit">
          Buscar Evento
        </Button>
      </div>
      {!isMobile && (
        <div className="w-1/2 min-h-screen relative">
          <Image alt="Hero" priority src="/hero.png" fill />
        </div>
      )}
    </main>
  );
}
