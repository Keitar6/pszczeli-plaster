import styled, { createGlobalStyle } from "styled-components";
export const Colors = {
  primary: "#FFB703",
  secondary: "#FB8500",
  tertiary: "#219EBC"
};
export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	font-family: "Tapestry", "Dancing Script", cursive;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

    // @media screen and (max-width: 800px){
    //     padding: 10px;
    // }
}

h1 {
	font-size:3.05 rem;
}

h2 {
	font-size:2.44 rem;
}

h3 {
	font-size:1.95 rem;
}

h4 {
	font-size:1.56 rem;
}

h5 {
	font-size:1.25 rem;
}

h6 {
	font-size:1 rem;
}
`;

export const PLarge = styled.p`
  font-size: 2.25 rem;
`;
