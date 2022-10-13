import { generateId } from "../generateId.function";

describe("Reusable Functions --> GenerateID", () => {
  const charactersMock =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 7;

  const mockIfContains = (Id: string) => {
    const ifContains = true;
    Array(Id).forEach((current) => {
      ifContains ? charactersMock.includes(current) : false;
    });
    return ifContains;
  };
  test("GenerateID", () => {
    expect.assertions(2);

    expect(generateId(idLength).length).toEqual(idLength);
    expect(mockIfContains(generateId(idLength))).toBe(true);
    // expect(generateId).toHaveBeenCalledWith(1);
  });
});
