import { Colors, H3 } from "global.styles";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: space-around;
  padding: 2rem 2rem;
  // border: 2px solid red;
`;

export const CheckoutSummaryContainer = styled.div`
  width: 50%;
  // min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1rem;
  // border-left: 1px solid ${Colors.darkRGBA};
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.dark};
`;

export const HeaderBlock = styled.div`
text-transform: capitalize;
width: 25%;

&:last-child {
	width: 10%;
	`;

export const Total = styled("footer")`
  // font-weight: 00;
  margin-top: 30px;
  margin-left: auto;
  font-size: 32px;
`;

export const CheckoutFormContainer = styled.div`
  // border: 2px solid red;
  width: 35%;
  display:flex
  padding: 0 1rem 0 0;

`;

export const FormTitle = styled(H3)`
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

export const SummaryTitle = styled(H3)`
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
