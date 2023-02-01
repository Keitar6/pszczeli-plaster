import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "../../../global.styles";

export const OrderItemContainerMotion = styled(motion.div)`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${Colors.darkRGBA};
  font-size: 1.25rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 0.5rem;
  gap: 2rem;
`;
