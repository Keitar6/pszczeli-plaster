export const IsRefNotNull = (
  refCurrent: HTMLElement | null
): refCurrent is HTMLElement => {
  return refCurrent !== null;
};

export const IsRefNull = (
  refCurrent: HTMLElement | null
): refCurrent is HTMLElement => {
  return refCurrent === null;
};

export const IsModal = (modal: HTMLElement | null): modal is HTMLElement => {
  return modal !== null;
};
