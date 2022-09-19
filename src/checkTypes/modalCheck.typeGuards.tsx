import { MutableRefObject } from "react";

export const IsRefNotNull = (
    ref: MutableRefObject<HTMLElement | null>
  ): ref is MutableRefObject<HTMLElement> => {
    return ref.current != null;
  };

export const IsRefNull = (
    ref: MutableRefObject<HTMLElement | null>
  ): ref is MutableRefObject<HTMLElement> => {
    return ref.current == null;
  };

export const IsModal = (modal: HTMLElement | null): modal is HTMLElement => {
    return modal != null;
  };