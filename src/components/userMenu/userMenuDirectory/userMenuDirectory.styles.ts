import styled from "styled-components";
import { Colors, StandardFlexContainer } from "../../../global.styles";
import Button from "../../button/button.component";


export const UserMenuContainer = styled(StandardFlexContainer)`
  flex-direction: column;
  gap: 2.4rem;
  max-width: 50rem;
  padding: 1rem 2rem 3rem 2rem;
  text-align: center;
  border-radius: 1.5rem;
  background: ${Colors.light};
`;


export const UserMenuLinks = styled.a`
  display: inline-block;
  margin-right: 15px;
  text-decoration: none;
  background-color: #ad343e;
  padding: 5px 25px;
  color: white;
  font-size: 18px;
  border: #333 1px solid;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const UserMenuLoginButtons = styled.button`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border:none;
  gap 2rem;
`;

export const UserMenuFuncButtons = styled(StandardFlexContainer)`
  width: 100%;
  flex-direction: column;
`;

export const UserMenuFuncButton = styled(Button)`
  width: 100%;
  border-bottom: 2px solid ${Colors.dark};
  flex-direction: row;
  gap: 0.5rem;
`;
