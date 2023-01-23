import { Colors, H3 } from "../../global.styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { StandardFlexMixin } from "../../global.styles";

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  // align-items: center;
  justify-content: start;
  padding: 1rem 2rem;
  height: 100%;
  // border: 2px solid red;
`;

export const OrdersContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  // border: 2px solid red;
`;
export const OrderItemsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;

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
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
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

export const OrderListLink = styled(Link)`
  cursor: pointer;
  position: relative;
  color: inherit;
  text-decoration: inherit;

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

  &:hover {
    color: ${Colors.primary};
  }
`;

export const OrderItemWrapper = styled(motion.div)`
  ${StandardFlexMixin};

  width: 100%;
`;
