import { homePath } from "../../utils/globalRoutes/globalRoutes.utils";
import { currentPath } from "./getCurrentPath.function";

export const refresh = (inputPath = "") => {
  const path = `${homePath}${inputPath}`;
  if (path === currentPath()) {
    window.location.reload();
    return "Refreshed";
  }
  return "NotRefreshed";
};
