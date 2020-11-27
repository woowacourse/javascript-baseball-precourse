export const hasDuplicateCharacter = string => {
  for (let i = 0; i < string.length - 1; i++) {
    if (string.slice(i + 1).includes(string[i])) {
      return true;
    }
  }
  return false;
};

export default hasDuplicateCharacter;
