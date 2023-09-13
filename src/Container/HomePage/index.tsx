"use client";

import ConatctCard from "@/components/ContactCard";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Grid } from "@mui/material";
import { HeroComponent, MemberList } from "./style";

const HomePage = ({ data }: any) => {
  return (
    <>
      <Navbar />
      <div className={HeroComponent}>
        <HeroSection />
      </div>
      <div className={MemberList}>
        <Grid container spacing={2}>
          {data &&
            data.map(
              ({
                companyName,
                email,
                facebookLink,
                industry,
                instagramLink,
                linkdInLink,
                memberName,
                phoneNumber,
                profilePicture,
                websiteLink,
              }: any) => {
                return (
                  <>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ConatctCard
                        profilePicture={profilePicture}
                        companyName={companyName}
                        email={email}
                        facebookLink={facebookLink}
                        industry={industry}
                        instagramLink={instagramLink}
                        linkdInLink={linkdInLink}
                        memberName={memberName}
                        phoneNumber={phoneNumber}
                        websiteLink={websiteLink}
                      />
                    </Grid>
                  </>
                );
              }
            )}
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
