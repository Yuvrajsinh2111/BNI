import { css } from "@emotion/css";

export const heroSection=css`
background:black;

.container{
    margin:0 auto;
}

.hero-image{
    width: 100%;
    height:100vh;
    position:relative;
}

.gallery-btn{
    background:white;
    color:black;
    padding:10px;
    fontWeight:bold;
    position:absolute;
    top:75%;
    left:12%;
    transform:translate(0%,50%)
}

@media (min-width:768px){
    .gallery-btn{
        positi on:absolute;
        top:80%;
        left:35px;
font-weight: 800;
    }
}

@media (min-width:900px){
    .gallery-btn{
        position:absolute;
        left:110px;
font-weight: 800;
    }
}

@media (min-width:1440px){
    .gallery-btn{
        position:absolute;
        left:12%;
font-weight: 800;
    }
}

@media (min-width:2500px){
    .gallery-btn{
        position:absolute;
        top:70%;
        left:12%;
font-weight: 800;
    }
}

@media (max-width:600px){
    .gallery-btn{
        position:absolute;
        top:100%;
        left:-4px;
font-weight: 800;
    }
}
`