import { homePath } from "utils/globalRoutes/globalRoutes.utils";


export const refresh = (inputPath = "") => {
  const path = `${homePath}${inputPath}`;

  if (path === window.location.href) window.location.reload();
};
