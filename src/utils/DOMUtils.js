const DOMUtils = {
  getElement: (element) => {
    return document.querySelector(element);
  },
  setElementId: (element, idValue) => {
    return (document.querySelector(element).id = idValue);
  },
  hideElement: (element) => {
    return (DOMUtils.getElement(element).style.display = 'none');
  },
  initElementValue: (element) => {
    return (DOMUtils.getElement(element).innerText = '');
  },
};

export default DOMUtils;
