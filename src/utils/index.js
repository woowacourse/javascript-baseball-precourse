export const $ = id => document.getElementById(id);

export const createElementWithText = (tag, text) => {
  const htmlTag = document.createElement(tag);
  htmlTag.innerHTML = text;

  return htmlTag;
};
