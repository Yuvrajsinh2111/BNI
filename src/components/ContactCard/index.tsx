import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const contactDetais = [
  {
    icons: "E",
    value: "test@gmail.com",
  },
  {
    icons: "Ph",
    value: "9724853887",
  },
];

const ConatctCard = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 450,
          marginTop: "20px",
          borderRadius: "20px",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src="https://www.maximusroster.com/public/profile_images/ajay_savli1.png"
            style={{
              borderRadius: "50%",
              width: "60%",
              height: "30%",
            }}
          />
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            display="flex"
            justifyContent="center"
            letterSpacing={0}
          >
            AJAY SALVI
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            display="flex"
            justifyContent="center"
          >
            Enterprise Network Solutions
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            display="flex"
            justifyContent="center"
          >
            Vinay Enterprises
          </Typography>
          <Divider sx={{ borderBottomWidth: 4 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <>
                {contactDetais &&
                  contactDetais.map(({ icons, value }: any) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            margin: "5px",
                          }}
                        >
                          {icons} : {value}
                        </div>
                      </>
                    );
                  })}

                <a>View Website</a>
              </>
            </Box>
            <div>
              <div>Social media icons</div>
              <Box>Breadcrums</Box>
            </div>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ConatctCard;
