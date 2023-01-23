import { Variants } from "framer-motion";

export const HPCategoriesVariants: Variants = {
  enter: { opacity: 0, x: "100vh" },

  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: "100vh" }
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
