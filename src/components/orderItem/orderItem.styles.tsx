import { Colors } from "global.styles";
import styled from "styled-components";

export const OrderItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 3rem;
  border-bottom: 1px solid ${Colors.darkRGBA};
  padding: 0.2rem 0 0.3rem 0;
  font-size: 1.25rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

export const OrderItemContent = styled(OrderItemContainer)`
  border: none;
  cursor: pointer;
  gap: 0;
`;

export const OrderItemHeader = styled(OrderItemContainer)`
  flex-direction: row;
  border: none;
  cursor: pointer;
`;

export const OrderItemInfoHeader = styled(OrderItemHeader)`
  align-items: start;
  justify-content: space-between;
  padding: 0;
  min-height: 0rem;
  font-size: 1rem;
`;

export const OrderItemInfo = styled(OrderItemHeader)`
  margin: 0.2rem 0 0 0;
  align-items: start;
  justify-content: space-between;
  min-height: 3rem;
  font-size: 1rem;
`;

export const Id = styled.span``;

export const Time = styled.span`
  display: flex;
`;

export const Total = styled.div`
  margin: 0 0.6rem;
`;

export const Info = styled.p`
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

export const ItemsInfo = styled.div``;

export const PayDeliveryInfo = styled.div``;

export const AdresInfo = styled.div``;

export const OrderDescription = styled.div`
  font-size: 1rem;
`;
