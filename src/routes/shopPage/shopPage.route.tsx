import { Outlet } from "react-router-dom";
import ShopDirectory from "../../components/shopDirectory/shopDirectory.component";

import { motion } from "framer-motion";
import { ShoppingPageVariants } from "../../utils/framer-motion/variants.utils";

const ShopPage = () => {
  return (
    <>
      <Outlet />
      <motion.div
        variants={ShoppingPageVariants}
        initial="enter"
        animate="visible"
        exit="exit"
      >
        <ShopDirectory />
      </motion.div>
    </>
  );
};

export default ShopPage;
