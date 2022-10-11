import styled from "styled-components";

export const NonValidFormInput = styled.p`
  // border: 2px solid red;
  font-size: 0.5rem;
  color: red;
`;

export const Form = styled.form`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Input = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 2px solid red;

  &:focus {
    outline: none;
  }
`;
