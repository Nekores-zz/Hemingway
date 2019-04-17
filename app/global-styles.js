import { createGlobalStyle } from 'styled-components';
import fontBold from "./fonts/Mostardesign-SofiaProBold.otf"
import fontLight from "./fonts/Mostardesign-SofiaProLight.otf"
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: SofiaPro;
    src: url(${fontLight});
    font-weight: light;
}

@font-face {
   font-family: SofiaPro;
    font-weight: bold;
    src: url(${fontBold}) format("opentype");
}
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0 auto;  
  }

  body {
    // font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-family: SofiaPro;
  }

  body.fontLoaded {
    // font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-family: SofiaPro;
  }

  #app {
    height: 100%;
    width: 100%;
    // background-color: #fafafa;
  } 
`;

export default GlobalStyle;
