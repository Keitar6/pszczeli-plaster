export const objectByStringFinder = (
  object: Record<string, any>,
  elToFind: string
) => {
  let temp: string | null = null;
  Object.entries(object).forEach(
    (pair: any, index: number, array: Array<[string, any]>) => {
      if (pair[0] === elToFind) {
        temp = pair[1];
        array.length = index + 1;
      }
    }
  );

  return temp ? temp : "";
};
