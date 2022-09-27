import styled, { createGlobalStyle } from "styled-components";

export enum Colors {
  primary = "#FFB703",
  secondary = "#FB8500",
  tertiary = "#219EBC",
  dark = "#023047",
  light = "#faeff0",
  white = "#FFFFFF",
  googleButtonBCKG = "#4285f4",
  googleButtonHover = "#357ae8"
}

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	font-family: "Tapestry", "Dancing Script", cursive;
	color:${Colors.dark};
  background-color:${Colors.light};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

    // @media screen and (max-width: 800px){
    //     padding: 10px;
    // }
}
`;
export const H1 = styled.h1`
  font-size: 3.05 rem;
`;
export const H2 = styled.h2`
  font-size: 2.44 rem;
`;

export const H3 = styled.h3`
  font-size: 1.95 rem;
`;

export const H4 = styled.h4`
  font-size: 1.56 rem;
`;

export const H5 = styled.h5`
  font-size: 1.25 rem;
`;

export const H6 = styled.h6`
  font-size: 1 rem;
`;

export const PLarge = styled.p`
  font-size: 2.25 rem;
`;

export const StandardFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
