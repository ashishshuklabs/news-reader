import { builtinModules } from "module";
import { createGlobalStyle } from "styled-components";
interface Colors {
  light100: string;
  light300: string;
  light200: string;
  dark300: string;
  dark400: string;
  dark600: string;
  dark700: string;
  dark800: string;
  dark900: string;
  red100: string;
  red200: string;
  blue800: string;
  green100: string;
  green700: string;
}
/* Default colors */
export const colors: Colors = {
  light100: "#ffffff",
  light200: "#F3F3F3",
  light300: "#E5E5E5 ",
  dark300: "#58595b",
  dark400: "#424B5A",
  dark600: "#252932",
  dark700: "#363636",
  dark800: "#050D1D",
  dark900: "#0D0D0D",
  red100: "#E11837",
  red200: "#B30E27",
  green100: "#A5BB29",
  blue800: "#0202f3ea",
  green700: "#1bc01b",
} as const;

export default createGlobalStyle`
 :root {
  --color-navbar-bg:${colors.light100};
  --color-body-bg:${colors.light100};
  --color-card-bg: ${colors.red100};
  --color-content-bg: ${colors.light200};
  --color-footer-bg:${colors.dark600};
  --color-tile-bg:${colors.red100};
  --color-navbar-text:${colors.dark600};
  --color-body-text:${colors.light200};
  --color-text-primary: ${colors.light100};
  --font-family: "Montserrat", sans-serif;
  --transition: all .3s ease-out;
  --spacing: ".25rem";
  --radius: "1rem"; 
}
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: var(--font-family);
  line-height: 1.5;
  
}
h1,h2,h3,h4,h5{
  letter-spacing: var(--ds-spacing);
  line-height: 1.25;
  margin-bottom:.75rem;
  text-transform: capitalize;
}
h1{
  font-size: 3rem;
}
h2{
  font-size: 2rem;
}
h3{
  font-size: 1.75rem;
}
h4{
font-size: 1.5rem;
}
h5{

}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
`;
