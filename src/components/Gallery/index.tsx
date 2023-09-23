"use client"

import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import gallery from "../../Utils/Images/gallery.png"
import Image from "next/image";
import { GalleryPage } from './style';

const GalleryBody = () => {
    const galleryImage = [gallery, gallery, gallery];
  return (
        <Box className={GalleryPage}>
          <Grid container className="wrapper">
            {galleryImage.map(data =>
              <Grid key={data.src} item sm={12} md={3} className='gallery-container'>
                <Image src={data} alt='container' className="grid-images" />
              </Grid>
            )}
          </Grid>
          <Grid container className="wrapper">
            {galleryImage.map(data =>
              <Grid key={data.src} item sm={12} md={3} className='gallery-container'>
                <Image src={data} alt='container' className="grid-images" />
              </Grid>
            )}
          </Grid>
          <Grid container className="wrapper">
            {galleryImage.map(data =>
              <Grid  key={data.src} item sm={12} md={3} className='gallery-container'>
                <Image src={data} alt='container' className="grid-images" />
              </Grid>
            )}
          </Grid>
          
          <Box>
            <Typography component="h3" textAlign="center" color="white" margin="0 0 10px 0" fontSize="150px" paddingBottom="60px">#MaximusFirst</Typography>
          </Box>
        </Box>
  )
}

export default GalleryBody