export const createElement = (tag = "", text = "") => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
};
