import { FC } from "react";
import { CategoriesHP } from "../categories/categories.component";
import { DescriptionHP } from "../description/descriptionHP.component";
import { DirectoryContainer } from "./directory.styles";

import { motion } from "framer-motion";
import { HomePageVariants } from "../../utils/framer-motion/variants.utils";

export const Directory: FC = () => {
  return (
    <motion.div
      variants={HomePageVariants}
      initial="enter"
      animate="visible"
      exit="exit"
    >
      <DirectoryContainer>
        <CategoriesHP />

        <DescriptionHP />
      </DirectoryContainer>
    </motion.div>
  );
};
