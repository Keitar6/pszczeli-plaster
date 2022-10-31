import { Colors } from "../../global.styles";
import styled from "styled-components";

export const InputCheckbox = styled.input`
  // border: 2px solid red;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  outline: none;
  content: none;
  // margin: 0 0 0 1rem;
  &[type="checkbox"]:before {
    font-family: "FontAwesome";
    content: "\f";
    font-size: 15px;
    color: transparent !important;
    background: transparent;
    display: block;
    width: 15px;
    height: 15px;

    border: 1.5px solid;
    border-image-source: linear-gradient(
      to left,
      ${Colors.primary},
      ${Colors.dark},
      ${Colors.primary}
    );
    border-image-slice: 2;
    margin-right: 7px;
  }

  &[type="checkbox"]:checked:before {
    color: transparent !important;
    background: ${Colors.primary};
  }
`;
