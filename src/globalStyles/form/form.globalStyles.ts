import styled from "styled-components";

export const Form = styled.form`
  // border: 2px solid red;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
`;

export const FormTextInputs = styled.div`
  // border: 2px solid red;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
`;

export const NonValidFormInput = styled.p`
  // border: 2px solid red;
  font-size: 0.5rem;
  color: red;
`;
