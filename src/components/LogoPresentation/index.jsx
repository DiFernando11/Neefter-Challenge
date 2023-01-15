import React from "react";
import logoNeefter from "../../assets/NefterLogo.png";

function LogoPresentation() {
  return (
    <header className="bg-[rgba(25,11,49,.83)] w-full h-24 flex items-center justify-center">
      <img className="w-80 h-20" src={logoNeefter} alt="Nefter Logo" />
    </header>
  );
}

export default LogoPresentation;
