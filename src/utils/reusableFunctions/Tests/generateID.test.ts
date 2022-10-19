import { generateId } from "../generateId.function";

describe("Reusable Functions --> GenerateID", () => {
  const charactersMock =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 5;

  const mockIfContains = (Id: string) => {
    const ifContains = true;
    Array(Id).forEach((current) => {
      ifContains ? charactersMock.includes(current) : false;
    });
    return ifContains;
  };

  test("GenerateID", () => {
    expect(generateId(idLength).length).toEqual(idLength);
    expect(mockIfContains(generateId(idLength))).toBe(true);
    expect(mockIfContains(generateId(undefined))).toBe(true);
  });
});
