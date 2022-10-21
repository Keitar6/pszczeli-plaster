import { Colors } from "../../global.styles";
import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid ${Colors.dark};
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  // gap: 1rem;
  // border: 2px solid red;
`;
export const RemoveButton = styled.div`
  // font-size: 1rem;
  padding-left: 12px;
  width: 10%;
  cursor: pointer;
  // border: 2px solid red;
`;

export const Image = styled("img")`
  width: 23%;
  img {
    width: 100%;
    height: 100%;
  }
  // border: 2px solid red;
`;

export const Span = styled.div`
  width: 22%;
  margin: 0 .3rem;
  // border: 2px solid red;
`;
export const Quantity = styled(Span)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.div`
  margin: 0 10px;
`;
