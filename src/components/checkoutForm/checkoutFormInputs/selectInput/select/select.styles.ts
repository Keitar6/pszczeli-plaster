import { Icon } from "@iconify/react";
import { Colors } from "../../../../../global.styles";
import styled from "styled-components";

export const AppCover = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  margin: 1rem auto 1rem auto;
  z-index: 1;
  color: ${Colors.darkRGBA};
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to top,
    ${Colors.dark},
    ${Colors.primary},
    ${Colors.dark}
  );
`;

export const SelectBox = styled.div`
  background-color: transparent;
  cursor: pointer;
`;
export const SelectedValue = styled.div`
  position: relative;
  display: flex;
  font-size: 1rem;
  line-height: 1;
  margin-right: 1.5rem;
  width: 100%;
  /* border: 2px solid red; */
`;
export const SelectedButton = styled.div`
  border-color: ${Colors.light};
  position: relative;
  height: 100%;
  padding: 0.5rem 0.9rem;
  background-color: transparent;
  border-radius: 0.3rem;
  cursor: pointer;
`;
export const Label = styled.div`
  display: none;
  padding: 0;
`;
export const LabelText = styled.div`
  width: 70%;
  /* border: 2px solid red; */
  padding: 0.8rem 0rem;
`;

export const LabelIcon = styled(Icon)`
  width: 20%;
  /* border: 2px solid red; */
`;

export const InputRadio = styled.input.attrs({
  type: "radio"
})`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 4;
`;

export const Options = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background-color: ${Colors.white};
  /* border-radius: 0.3rem; */
`;

export const OptionValue = styled.div`
  position: absolute;
  left: 0rem;
  top: 0rem;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 2rem;
  opacity: 0;
  background-color: ${Colors.light};
  transform: scale(0);
  // border: 2px solid red;
`;

export const Option = styled.div`
  position: relative;
  line-height: 1;
  transition: 0.3s ease all;
  z-index: 2;

  &,
  ${Label} {
    color: ${Colors.dark};
    font-size: 1rem;
    /* border: 2px solid red; */
  }

  & ${InputRadio}:checked ~ ${OptionValue} {
    opacity: 1;
    transform: scale(1);
    position: absolute;
  }

  & ${InputRadio}:checked ~ ${Label} {
    color: ${Colors.primary};
    background-color: ${Colors};
  }

  & ${InputRadio}:checked ~ ${Label}:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export const OptionsViewButton = styled.input.attrs({
  type: "radio"
})`
  position: absolute;
  top: 0;
  /* right: 0; */
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;

  &:checked ~ ${Options} {
    border: 1px solid ${Colors.light};
    border-color: ${Colors.light};
  }

  &:checked ~ ${Options} ${Label} {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  &:not(:checked)
    ~ ${Options}
    ${Option}
    ${InputRadio}:checked
    ~ ${OptionValue} {
    top: -40px;
  }
`;
