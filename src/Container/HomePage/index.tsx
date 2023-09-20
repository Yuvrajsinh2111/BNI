"use client";

import { useState } from "react";
import { Grid, Pagination, Stack } from "@mui/material";
import ConatctCard from "@/components/ContactCard";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { MemberList, pagenation } from "./style";

const HomePage = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage=4

  const startIndex=(currentPage-1)*itemPerPage


  const endIndex=startIndex+itemPerPage;

  const pageData=data.slice(startIndex,endIndex)

  const handlePageChange = (event:any,page:number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className={MemberList}>
        <Grid container spacing={2}>
          {pageData &&
            pageData.map(
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
      <Stack spacing={2} className={pagenation}>
        <Pagination count={Math.ceil(data.length / 4)} onChange={handlePageChange} showFirstButton showLastButton style={{display:'flex',justifyContent:"center"}}/>
      </Stack>
    </>
  );
};

export default HomePage;
