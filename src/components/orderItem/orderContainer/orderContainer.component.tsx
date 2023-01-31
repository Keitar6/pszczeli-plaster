import { FC, PropsWithChildren } from "react";
import { OrdersHistoryOpenVariants } from "../../../utils/framer-motion/variants.utils";
import { OrderItemContainerMotion } from "./orderContainer.styles";

export const OrderItemContainer: FC<
  PropsWithChildren<{ ifOpened: boolean }>
> = ({ children, ifOpened }) => {
  return (
    <OrderItemContainerMotion
      variants={OrdersHistoryOpenVariants}
      initial="enter"
      animate="visible"
      custom={ifOpened}
      exit="exit"
    >
      {children}
    </OrderItemContainerMotion>
  );
};
