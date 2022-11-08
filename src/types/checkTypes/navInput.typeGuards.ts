
export const IsInputNull = (
  ref: HTMLElement | null
): ref is HTMLInputElement => {
  return ref != null;
};

