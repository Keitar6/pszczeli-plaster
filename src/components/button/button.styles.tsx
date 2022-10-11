import styled from "styled-components";
import { Colors, Typhography } from "../../global.styles";

export const BaseButton = styled.button`
  min-width: 10rem;
  width: auto;
  letter-spacing: 0.5px;
  padding: 1rem 3rem;
  font-size: ${Typhography.fontSizes.H6};
  background-color: ${Colors.light};
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.primary};
  }

  &:focus {
    transform: scale(1.05);
    transition: all 0.6s ease;
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
  border: none;
  border-radius: 0.6rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));

  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.primary};
    border: none;
  }
`;

export const LoginCheckout = styled(BaseButton)`
  background-color: ${Colors.primary};
  color: ${Colors.dark};
  border: none;
  padding: 0.5r 0;
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

export const ProductCard = styled(LoginButton)`
  background-color: ${Colors.darkRGBA};
  color: ${Colors.primary};
  min-width: 5rem;
  padding: 1rem 2rem;

  &:hover {
    border: none;
    background-color: ${Colors.primaryRGBA};
    color: ${Colors.dark};
  }
`;

export const InputBar = styled(BaseButton)`
  min-width: 1rem;
  background-color: ${Colors.dark};
  color: ${Colors.primary};
  border-radius: 0 0.6rem 0.6rem 0;
  padding: 0.5rem 1rem;
  height: 2rem;
  &:hover {
    color: ${Colors.light};
    border: none;
  }
`;

export const UserMenuFuncButton = styled(BaseButton)`
  background-color: ${Colors.light};
  border: 1px solid ${Colors.dark};

  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.primary};
    // border: none;
  }
`;

export const ProductCardCartButton = styled(BaseButton)`
  background-color: ${Colors.primary};
  border: 1px solid ${Colors.dark};
  border-radius: .5rem 0 0 .5rem;
  min-width: 1rem;
  padding: .8rem 1rem;
  // margin-top:1rem;

  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.primary};
    // border: none;
  }
`;

export const CartFuncButton = styled(BaseButton)`
  background-color: ${Colors.light};
  border: 1px solid ${Colors.dark};
  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.primary};
    // border: none;
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

export const SortingTypes = styled(BaseButton)`
  font-family: ${Typhography.fontType};
  font-size: ${Typhography.fontSizes.H6};
  font-weight: bold;

  min-width: 5rem;
  padding: 0.2rem 1rem;
  border: 2px solid ${Colors.dark};
  border-radius: 5rem;

  &:hover {
    color: ${Colors.dark};
    background-color: ${Colors.darkRGBA};
  }

  &:focus {
    transform: none;
    transition: none;
  }
`;

export const FormButton = styled(BaseButton)`
  //   border: 2px solid red;
  align-items: space-between;
  justify-content: center;
`;