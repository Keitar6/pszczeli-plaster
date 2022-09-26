import styled from "styled-components";
import { Colors } from "../../global.styles";

export const BaseButton = styled.button`
  min-width: 10rem;
  width: auto;
  letter-spacing: 0.5px;
  // line-height: 3.1rem;
  padding: 1rem 3rem;
  font-size: 1rem;
  background-color: ${Colors.light};
  // text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid ${Colors.primary};

  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.primary};
    // border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: ${Colors.googleButtonBCKG};
  color: ${Colors.white};

  &:hover {
    background-color: ${Colors.googleButtonHover};
    border: none;
  }
`;

export const LoginButton = styled(BaseButton)`
  background-color: ${Colors.primary};
  color: ${Colors.dark};
  border: 1px solid none;
  border-radius: 0.6rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
  
  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.primary};
    border: none;
  }
`;
export const InvertedButton = styled(LoginButton)`
  background-color: ${Colors.dark};
  color: ${Colors.primary};

  &:hover {
    border: none;
    background-color: ${Colors.primary};
    color: ${Colors.dark};
  }
`;

export const UserMenuFuncButton = styled(BaseButton)`
  background-color: white;
  border: 1px solid ${Colors.dark};
  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.white};
    border: none;
  }
`;

export const ButtonSpiner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
