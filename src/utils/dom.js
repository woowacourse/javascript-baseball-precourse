export const $ = id => document.getElementById(id);

export const createElement = (innerHTML, type = 'div') => {
  const element = document.createElement(type);
  element.innerHTML = innerHTML;
  return element;
};

export const removeFirstChild = parent => {
  if (!parent.hasChildNodes()) return;
  parent.removeChild(parent.firstChild);
};

export const replaceChild = (parent, newChild) => {
  removeFirstChild(parent);
  parent.appendChild(newChild);
};
