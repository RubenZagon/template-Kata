export function addLetters(...letters: string[]) {
  const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  if (letters.length === 0 || letters[0] === "z") { return 'z' }

  return arrayLetters[letters.length].toLowerCase()

}