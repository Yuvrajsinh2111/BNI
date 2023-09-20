
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import HeroImage from "../../Utils/Images/banner.png";
import HeroImageMobile from "../../Utils/Images/hero-mobile-img.png";
import Maximus from "../../Utils/Images/maximus.png";
import Roaster from "../../Utils/Images/e-roaster.png";
import { heroSection } from "./style";
 

const HeroSection = () => {
  const isPhone = useMediaQuery('(max-width:600px)');
  const router = useRouter();
  const handleChange=()=>router.push('gallery')

  return (
    <>
      <Grid container className={heroSection}>
        <Grid item md={10} className="container">
          {isPhone?
          <Box position='relative'>
            <Box position='absolute' top='55px' left='20px'>
            <Image src={Maximus} alt="maximus" />
            <Image src={Roaster} alt="roaster" />
            <Button className="gallery-btn" onClick={handleChange}>
              View Gallery
              </Button>
            </Box>
            <Image src={HeroImageMobile} alt="hero-section" style={{width:'100%'}} />
          </Box>
          :
          <Box>
          <Image src={HeroImage} alt="hero-section" className="hero-image" />
          <Button className="gallery-btn" onClick={handleChange}> View Gallery </Button>
          </Box>
          }
          </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
