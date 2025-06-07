export const getFirstLetterFromName = (name: string) => {
  return name
    .split(" ")
    .map((name) => name[0])
    .join("");
};
