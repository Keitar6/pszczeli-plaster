import { Variants } from "framer-motion";

export const HPCategoriesVariants: Variants = {
  enter: (index: number) => {
    const xValue = index < 2 ? { x: "-100vh" } : { x: "100vh" };
    const yValue = index > 2 ? { y: "-100vh" } : { y: "100vh" };
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

export const CartVariants: Variants = {
  enter: { opacity: 0, x: "100vh" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { x: window.innerWidth }
};
