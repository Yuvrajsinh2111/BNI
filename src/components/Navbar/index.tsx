"use client";

import Image from "next/image";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Logo from "../../Utils/Images/Bni Logo.png"
import { navbar } from "./style";
import { GlobalContext } from "@/context/Global";

const Navbar = () => {
  const isPhone = useMediaQuery('(max-width:600px)');
  const [searchText, setSearchText] = useState('');
  const { onLoadMemberData } = useContext(GlobalContext);
  const [isScrolled, setIsScrolled] = useState(0);
  const scroll=isScrolled>0?"fixed":""

  const handleSubmit = useCallback(() => {
    onLoadMemberData(searchText)
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  }, [searchText])

  
  const handleScroll = () => {
    setIsScrolled(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (searchText?.length === 0) {
      onLoadMemberData("")
    }
  }, [onLoadMemberData, searchText])


  return (
    <>
      {isPhone ? <Box className={navbar(scroll)} >
        <Grid container className="navbar-wrapper" >
          <Grid item sm={12} className="container">
            <Grid item sm={12} className="logo-grid">
              <Image src={Logo} alt="hero-section" className="logo" />
              <Button className="mobile-login-btn">
                <PersonOutlinedIcon style={{ color: 'white' }} />
              </Button>
            </Grid>
          </Grid>
          <Grid item sm={12} className="search-field-grid" mt={2}>
            <input name="text" value={searchText} type="text" onChange={(event) => setSearchText(event.target.value)} placeholder="Search..." />
            <Button className="search-button" onClick={handleSubmit}>
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </Box> :
        <Box className={navbar(scroll)}>
          <Grid container>
            <Grid item sm={12} className={navbar(scroll)}>
              <Grid item sm={4} className="logo-grid">
                <Image src={Logo} alt="hero-section" className="logo" />
              </Grid>

              <Grid item sm={4} className="search-field-grid">
                <input name="text" value={searchText} type="text" onChange={(event) => setSearchText(event.target.value)} placeholder="Search..." />
                <Button className="search-button" onClick={handleSubmit}>
                  <SearchIcon />
                </Button>
              </Grid>

              <Grid item sm={4} className="button-grid">
                <Button className="login-btn">LOGIN</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      }
    </>
  );
};

export default Navbar;
