import styled from "styled-components";
import { Form } from "../../globalStyles/form/form.globalStyles";
import { motion } from "framer-motion";
import { StandardFlexMixin } from "../../global.styles";

export const ProfileDetailsContainer = styled(motion.div)`
  ${StandardFlexMixin}
  flex-direction: column;
  justify-content: start;
  padding: 2rem 0rem;
  gap: 2rem;
  flex: 1 1 100%;
`;
export const ProfileDetailsForm = styled(Form)`
  max-width: 30rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
`;
