import { homePath } from "global.styles";

export const refresh = (inputPath = "") => {
  const path = `${homePath}${inputPath}`;
  console.log(path);
  console.log(window.location.href);
  if (path === window.location.href) window.location.reload();
};
