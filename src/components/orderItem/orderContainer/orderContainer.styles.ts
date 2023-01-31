import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "../../../global.styles";

export const OrderItemContainerMotion = styled(motion.div)`
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
