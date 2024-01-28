import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
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

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Black.ttf") format("truetype");
    font-weight: 900;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-ExtraBold.ttf") format("truetype");
    font-weight: 800;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Bold.ttf") format("truetype");
    font-weight: 700;
    font-display: fallback;
  }

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Medium.ttf") format("truetype");
    font-weight: 500;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Regular.ttf") format("truetype");
    font-weight: 400;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Light.ttf") format("truetype");
    font-weight: 300;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-ExtraLight.ttf") format("truetype");
    font-weight: 200;
    font-display: fallback;
  }
  
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/static/Inter-Thin.ttf") format("truetype");
    font-weight: 100;
    font-display: fallback;
  }
`;

export default GlobalStyle;
