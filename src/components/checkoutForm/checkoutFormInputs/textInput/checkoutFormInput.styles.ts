import { Colors } from "../../../../global.styles";
import styled from "styled-components";

export const InputContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  position: relative;
  margin: 0.5rem 0;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 0.7rem;
  top: 0.9rem;
  transition: all 0.2s;
  padding: 0 0.1rem;
  z-index: 1;
  color: ${Colors.dark};
  transition: all 0.3s;
  opacity: 0;

  &::before {
    content: "";
    height: 0.3rem;
    background-color: ${Colors.light};
    position: absolute;
    left: 0rem;
    top: 0.7rem;
    width: 100%;
    z-index: -1;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  background: ${Colors.light};
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    ${Colors.primary},
    ${Colors.dark}
  );
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;
  color: ${Colors.dark};
  transition: all 0.5s;

  &:focus {
    border-image-source: linear-gradient(
      to left,
      ${Colors.dark},
      ${Colors.primary}
    );
    border-radius: 0.5rem;
    transition: all 0.5s;
  }

  &:focus + ${InputLabel},.filled {
    top: -0.7rem;
    color: ${Colors.dark};
    font-size: 0.9rem;
    opacity: 1;
  }

  &::placeholder {
    opacity: 0.5;
    font-size: 1rem;
    transition: all 0.5s;
  }
  &:focus::placeholder {
    opacity: 1;
    animation-delay: 0.3s;
  }
`;
