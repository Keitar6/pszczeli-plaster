import { Colors, H3 } from "global.styles";
import styled from "styled-components";

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  margin: 2rem auto;
  padding: 0 2rem;
  // border: 2px solid red;
`;

export const OrdersContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0 2rem;
  // border: 2px solid red;
`;

export const OrdersHeader = styled.div`
  padding: 0.7rem 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.dark};
  // border: 2px solid red;
`;

export const HeaderBlock = styled.div`
text-transform: capitalize;
width: 25%;

&:last-child {
	width: 10%;
	`;

export const OrdersTitle = styled(H3)`
  border-bottom: 2px solid;
  border-image-slice: 1;

  border-image-source: linear-gradient(
    to left,
    ${Colors.dark},
    ${Colors.primary},
    ${Colors.dark}
  );
  padding-bottom: 0.5rem;
  position: relative;

  }
`;
