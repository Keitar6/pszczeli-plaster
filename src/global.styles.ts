import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const Typhography = {
  fontType: '"Tapestry", "Dancing Script", cursive',
  fontSizes: {
    H1: "3.05 rem",
    H2: "2.44 rem",
    H3: "1.95 rem",
    H4: "1.56 rem",
    H5: "1.25 rem",
    H6: "1 rem",
    PLarge: "2.25 rem"
  }
};

export enum Colors {
  primary = "#FFB703",
  primaryRGBA = "#FFB7033e",
  secondary = "#FB8500",
  tertiary = "#219EBC",
  dark = "#023047",
  darkRGBA = "#0230473e",
  light = "#faeff0",
  lightBlue = "#54b3d6",
  white = "#FFFFFF",
  googleButtonBCKG = "#4285f4",
  googleButtonHover = "#357ae8"
}

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;

 &::-webkit-scrollbar {
    width: 0rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.00);
  }
  &::-webkit-scrollbar-thumb {
    backgroundColor: ${Colors.primary};
    visibility: hidden;
    borderRadius: 5rem;
    transition: all 0.5s ease-out;
  }
}


*::-webkit-scrollbar-thumb:hover: {
  visibility: visible;
  transition: all 0.5s ease-out;
}

body {
	font-family: ${Typhography.fontType};
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
  font-size: ${Typhography.fontSizes.H1};
`;
export const H2 = styled.h2`
  font-size: ${Typhography.fontSizes.H2};
`;

export const H3 = styled.h3`
  font-size: ${Typhography.fontSizes.H3};
`;

export const H4 = styled.h4`
  font-size: ${Typhography.fontSizes.H4};
`;

export const H5 = styled.h5`
  font-size: ${Typhography.fontSizes.H5};
`;

export const H6 = styled.h6`
  font-size: ${Typhography.fontSizes.H6};
`;

export const PLarge = styled.p`
  font-size: ${Typhography.fontSizes.PLarge};
`;

export const StandardFlexContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Title = styled(H3)`
  border-bottom: 2px solid;
  border-image-slice: 1;

  border-image-source: linear-gradient(
    to left,
    ${Colors.primary},
    ${Colors.dark}
  );
  padding-bottom: 0.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-left: 0.2rem solid ${Colors.primary};
    border-top: 0.2rem solid ${Colors.dark};
    border-radius: 0.6rem 0 00rem;
    top: -0.5rem;
    left: -1rem;
  }
`;

export const BareLink = styled(Link)`
  cursor: pointer;
  text-decoration: inherit;
  color: inherit;
`;

export const TextLink = styled.div`
  cursor: default;
  position: relative;
  color: inherit;
  text-decoration: inherit;
  padding-bottom:0.3rem;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
