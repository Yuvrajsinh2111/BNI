import ConatctCard from "@/components/ContactCard";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "1px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HeroSection />
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ConatctCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
