import { Colors } from "global.styles";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: space-between;
  margin: 2rem auto;
  padding: 0 2rem;
  // border: 2px solid red;
`;

export const CheckoutSummaryContainer = styled.div`
  width: 50%;
  // min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 1rem;
  border-left: 1px solid ${Colors.darkRGBA};
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
  padding:0 1rem 0 0;
`;
