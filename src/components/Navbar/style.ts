import { css } from "@emotion/css";

export const navbar=css`
display:flex; 
align-items:center; 
background:black;
padding:10px;

.container{
    display:flex;
}

.logo-grid{
    display:flex;
    justify-Content:center;

    .logo{
        max-width: 194px;
    }
}

.search-field-grid-mobile{
    display:block;
}

.search-field-grid{
    display:flex;
    border-radius: 5px 0 0 5px;
    justify-Content:center;
    
    input{
        border-radius: 5px 0 0 5px;
        height: 30px;
        margin-right: 1px;
        background:transparent;
        width:100%;
        padding:3px 8px;
        color:white;
        border:1px solid white;
        border-right:none;
    }

    input:focus{
        border:none;
        margin-bottom:0;
    }

    button{
        background:black;
        color:white;
        borderRadius:0px 5px 5px 0px ;
        border:1px white solid;
        border-left:none;
    }
}

.button-grid{
    display:flex;
    justify-Content:center;

    .login-btn{
        color:white;
    border:white 1px  solid;
    padding:8px 16px;

    }
}

@media (max-width: 768px) {
    .conatiner{
        width:100%;
    }
    .logo-grid{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .logo{
        widht:100%;
    }

    
}
`