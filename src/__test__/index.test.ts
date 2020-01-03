import { addLetters } from "../index";

describe('Alphanumeric', () => {
  test('Debe devolver "z" si le entra solo una z', () => {
    expect(addLetters("z")).toBe("z")
  });
});