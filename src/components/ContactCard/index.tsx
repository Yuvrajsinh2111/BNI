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
import { Avtar, ContactCard, ContactDetail } from "./style";

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
  return (
    <>
      <Card
        className={ContactCard}
      >
        <div className="avatar-icon">
          <Avatar src={profilePicture?.url} className={Avtar} />
        </div>
        <CardContent className="card-container">
          <Typography
            gutterBottom
            textAlign="center"
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
          <Divider className="divider" />
          <Box>
            <>
              <div className={ContactDetail}>Email : {email}</div>
              <div className={ContactDetail}>Phone : {phoneNumber}</div>
              <div className="link-container">
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
