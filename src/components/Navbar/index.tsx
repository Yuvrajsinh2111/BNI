import Image from "next/image";
import React, { useState } from "react";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Logo from "../../Utils/Images/Bni Logo.png"
import { navbar } from "./style";

const Navbar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputValue, 'abc');
    setInputValue('')
  }

  const isPhone = useMediaQuery('(max-width:600px)');
  return (
    <>
      {isPhone ? <Box className={navbar}>
        <Grid container style={{width:'100%',display: 'flow-root'}}>
          <Grid item sm={12}  className="container">
            <Grid item sm={12} className="logo-grid">
              <Image src={Logo} alt="hero-section" className="logo" />
              <Button>
                <PersonOutlinedIcon style={{color:'white'}}/>
              </Button>
            </Grid>
          </Grid>
            <Grid item sm={12} className="search-field-grid" mt={2}>
              <input name="text" value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Search..."/>
              <Button style={{borderRadius:"0px 5px 5px 0px" ,border:"1px white solid"}}  onClick={handleSubmit}>
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
      </Box> :
        <Box>
          <Grid container>
            <Grid item sm={12} className={navbar}>
              <Grid item sm={4} className="logo-grid">
                <Image src={Logo} alt="hero-section" className="logo" />
              </Grid>

              <Grid item sm={4} className="search-field-grid">
                <input name="text" value={inputValue} type="text" onChange={(e)=>setInputValue(e.target.value)} placeholder="Search..."/> 
                <Button style={{borderRadius:"0px 5px 5px 0px" ,border:"1px white solid"}} onClick={handleSubmit}>
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
