import { Variants } from "framer-motion";

export const HPCategoriesVariants: Variants = {
  enter: (index: number) => {
    const xValue = index < 2 ? { x: "-100vh" } : { x: "100vh" };
    const yValue = index > 2 ? { y: "100vh" } : { y: "-100vh" };
    const value = index === 2 ? yValue : xValue;

    return { opacity: 0, ...value };
  },
  visible: (index: number) => {
    let transitionTime = 1;
    const maxIndex = 4;
    const value = index === 2 ? { y: 0 } : { x: 0 };

    if (index < 2) {
      transitionTime = transitionTime - index / 10;
    } else {
      transitionTime = transitionTime - (index - maxIndex) / 10;
    }
    return { opacity: 1, ...value, transition: { duration: transitionTime } };
  },
  exit: (index: number) => {
    const value = index === 2 ? { y: "100vh" } : { x: "100vh" };

    return { opacity: 0, ...value };
  }
};
export const UserMenuVariants: Variants = {
  enter: () => {
    const xValue = Math.floor(Math.random() * 2) === 1 ? "100vh" : "-100vh";
    return { opacity: 0, x: xValue };
  },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: "-100vh" }
};
export const ProductDescriptionVariants: Variants = {
  enter: () => {
    const xValue = "100vh";
    return { opacity: 0, y: xValue };
  },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: "-100vh" }
};
export const CartVariants: Variants = {
  enter: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { x: window.innerWidth }
};
export const CartItemsVariants: Variants = {
  enter: { opacity: 0, x: "100vh" },
  visible: (index: number) => {
    const transTime = 1 + (index !== 0 ? index / 5 : 0);
    return { opacity: 1, x: 0, transition: { duration: transTime } };
  },
  exit: { x: window.innerWidth }
};
export const CheckoutVariants: Variants = {
  enter: { opacity: 0, x: "100vh" },
  visible: (index: number) => {
    const transTime = 1 + (index !== 0 ? index / 5 : 0);
    return { opacity: 1, x: 0, transition: { duration: transTime } };
  },
  exit: { x: window.innerWidth }
};
export const ShopMenuProductCardVariants: Variants = {
  enter: { opacity: 0, x: "100vh" },
  visible: ({
    viewLimiterInit,
    viewLimiter,
    index
  }: {
    viewLimiterInit: number;
    viewLimiter: number;
    index: number;
  }) => {
    let transTime = 0.8;
    const periodStart = viewLimiter === viewLimiterInit ? 0 : viewLimiter;
    if (index < viewLimiterInit) {
      transTime = transTime + index / 5;
    } else {
      transTime = transTime + (index - periodStart) / 5;
    }
    return {
      opacity: 1,
      x: 0,
      transition: { duration: transTime }
    };
  },
  exit: { opacity: 0, transition: { duration: 1 } }
};
export const OrdersHistoryVariants: Variants = {
  enter: { opacity: 0, y: "20vh" },
  visible: ({
    viewLimiterInit,
    viewLimiter,
    index
  }: {
    viewLimiterInit: number;
    viewLimiter: number;
    index: number;
  }) => {
    let transTime = 0.5;
    const periodStart = viewLimiter === viewLimiterInit ? 0 : viewLimiter;
    if (index < viewLimiterInit) {
      transTime = transTime + index / 5;
    } else {
      transTime = transTime + (index - periodStart) / 5;
    }
    return {
      opacity: 1,
      y: 0,
      transition: { duration: transTime }
    };
  },
  exit: { opacity: 0, transition: { duration: 1 } }
};
export const OrdersHistoryOpenVariants: Variants = {
  enter: { scaleY: 1 },
  visible: (ifOpened: boolean) => {
    const transTime = 0.3;

    return {
      height: ifOpened ? "100%" : 80,
      transition: { duration: transTime }
    };
  },
  exit: { height: 1, transition: { duration: 0.5 } }
};
export const VanishingPageVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};
export const ShoppingPageVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};
export const HomePageVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};
export const CheckoutPageVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};
export const OrderPageVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};

export const NavbarAndFooterVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};

export const MyAccountVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};
