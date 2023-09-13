/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroImage from "../../Utils/Images/banner.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <Image src={HeroImage} alt="hero-section" height={500} />
    </div>
  );
};

export default HeroSection;
