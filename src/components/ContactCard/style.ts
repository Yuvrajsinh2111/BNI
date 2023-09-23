import { css } from "@emotion/css";

export const Avtar = css`
  border-radius: 50%;
  width: 60%;
  height: 30%;
`;

export const ContactDetail = css`
  display: flex;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ContactCard = css`
  max-width: 450px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: white;
  color: black;
  box-shadow: 6px;
  margin: 2px;
  padding: 2px;
  height: 440px;

  .avatar-icon{
    display:flex;
    justify-content:center;
  }

  .card-container{
    padding:16px;
  }

  .divider{
    border-bottom-width:3px;
  }

  .link-container{
    display:flex;
    justify-content:space-between;
  }

  @media (max-width:426px){
    height:450px;

    .avtar-icon{
      padding-top:16px;
    }

    .css-46bh2p-MuiCardContent-root {
      padding:0 16px;
    }
  }

  @media(max-width:376px){
    height:420px;
  }

  @media(max-width:376px){
    height:400px;
  }
  
`;
