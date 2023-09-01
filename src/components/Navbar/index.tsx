import React from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "red",
          justifyContent: "space-around",
          alignItems: "center",
          height: "60px",
          color: "white",
          fontSize: "40px",
        }}
      >
        <div>BNI</div>
        <div>
          <input></input>
        </div>
        <div>
          <Button sx={{ color: "white" }}>LOGIN</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
