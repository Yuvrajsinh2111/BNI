import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#cf2030",
          justifyContent: "space-around",
          alignItems: "center",
          height: "60px",
          color: "white",
          fontSize: "40px",
        }}
      >
        <div>BNI</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            style={{ height: "30px", marginRight: "1px", borderRadius: "5px" }}
          ></input>
          <Button sx={{ backgroundColor: "black", color: "white" }}>
            <SearchIcon />
          </Button>
        </div>
        <div>
          <Button sx={{ color: "white" }}>LOGIN</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
