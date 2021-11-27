export const createElement = (type, innerHTML) => {
  const element = document.createElement(type);
  element.innerHTML = innerHTML;
  return element;
};
