import { homePath } from "global.styles";

export const refresh = (inputPath = "") => {
  const path = `${homePath}${inputPath}`;

  if (path === window.location.href) window.location.reload();
};
