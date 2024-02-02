import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: black;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
    font-size: ${({ theme }) => theme.font.fontSize}
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, a, p, span {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Black.ttf") format("truetype");
    font-weight: 900;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-ExtraBold.ttf") format("truetype");
    font-weight: 800;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Bold.ttf") format("truetype");
    font-weight: 700;
  }

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-SemiBold.ttf") format("truetype");
    font-weight: 600;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Medium.ttf") format("truetype");
    font-weight: 500;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Regular.ttf") format("truetype");
    font-weight: 400;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Light.ttf") format("truetype");
    font-weight: 300;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-ExtraLight.ttf") format("truetype");
    font-weight: 200;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Thin.ttf") format("truetype");
    font-weight: 100;
  }
`;

export default GlobalStyle;
