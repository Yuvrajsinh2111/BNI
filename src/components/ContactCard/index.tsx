import React from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avtar, ContactDetail } from "./style";

const ConatctCard = ({
  companyName,
  email,
  facebookLink,
  industry,
  instagramLink,
  profilePicture,
  linkdInLink,
  memberName,
  phoneNumber,
  websiteLink,
}: any) => {
  const isPhone = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Card
        sx={{
          maxWidth: 450,
          marginTop: "20px",
          borderRadius: "20px",
          backgroundColor: "white",
          color: "black",
          boxShadow: 6,
          margin: 2,
          padding: 2,
          maxHeight: 400,
          minWidth: 200,
          // border: "1px solid red",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar src={profilePicture?.url} className={Avtar} />
        </div>
        <CardContent sx={{padding:isPhone?'0px':'16px'}}>
          <Typography
            gutterBottom
            variant="h4"
            display="flex"
            justifyContent="center"
            letterSpacing={0}
          >
            {memberName}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            display="flex"
            justifyContent="center"
          >
            {companyName}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            display="flex"
            justifyContent="center"
          >
            {industry}
          </Typography>
          <Divider sx={{ borderBottomWidth: 3, borderBlockColor: "#cf2030" }} />
          <Box>
            <>
              <div className={ContactDetail}>Email : {email}</div>
              <div className={ContactDetail}>Phone : {phoneNumber}</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link
                  href={websiteLink ? websiteLink : ""}
                  style={{ color: "#cf2030" }}
                >
                  {websiteLink ? "View Website" : ""}
                </Link>
                <div>
                  <InstagramIcon />
                  <FacebookIcon />
                  <LinkedInIcon />
                </div>
              </div>
            </>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ConatctCard;
