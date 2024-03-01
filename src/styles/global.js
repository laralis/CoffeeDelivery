import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  :root{
    font-size: 62.5%;
  }
  body{
    background-color: ${(props) => props.theme["--background"]};
    -webkit-font-smoothing: antialiased;
    padding: 3.2rem 16rem;
  }
  body,input,textarea,button{
    font-family: "Roboto",sans-serif;
    font-size: 1.6rem;
  }

`;
