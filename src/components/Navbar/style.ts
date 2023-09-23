import { css } from "@emotion/css";

export const navbar=(scroll:any)=>css`
position:${scroll};
display:flex;
align-items:center; 
background:black;
padding:10px 0;
width:100%;
z-index:9;

.navbar-wrapper{
    width: 100%;
    display:flex;
}

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
        border:2px white solid; 
    }
    input:hover{
        border:2px white solid;   
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

    .search-button{
        borderRadius: px 5px 5px 0px;
        border: 1px white solid;
    }
}

.button-grid{
    display:flex;
    justify-content:center;

    .login-btn{
        display:none;
        color:white;
    border:white 1px  solid;
    padding:8px 16px;

    }
}

.mobile-login-btn{
    display:none;
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