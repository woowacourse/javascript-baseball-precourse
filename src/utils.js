export const createMyElement = (tag, text) => {
  const element = document.createElement(tag);
  element.innerText = text;

  return element;
};
