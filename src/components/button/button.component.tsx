import { ButtonHTMLAttributes, FC } from "react";
import {
  BaseButton,
  ButtonSpiner,
  GoogleSignInButton,
  InvertedButton,
  UserMenuFuncButton,
  LoginButton,
  InputBar,
  ProductCard,
  SortingTypes,
  CartFuncButton
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
  userMenuFuncButton = "userMenuFuncButton",
  login = "LoginButton",
  InputBar = "InputBar",
  productCard = "ProductCard",
  cartFuncButton = "CartFuncButton",
  sorting = "Sorting"
}

type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.login]: LoginButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.userMenuFuncButton]: UserMenuFuncButton,
    [BUTTON_TYPE_CLASSES.InputBar]: InputBar,
    [BUTTON_TYPE_CLASSES.productCard]: ProductCard,
    [BUTTON_TYPE_CLASSES.sorting]: SortingTypes,
    [BUTTON_TYPE_CLASSES.cartFuncButton]: CartFuncButton
  }[buttonType]);

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpiner /> : children}
    </CustomButton>
  );
};

export default Button;
