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
  showElement: (element) => {
    return (DOMUtils.getElement(element).style.display = '');
  },
  initElementValue: (element) => {
    return (DOMUtils.getElement(element).innerText = '');
  },
  initValue: (element) => {
    element.value = '';
  },
  showResult: (string) => {
    DOMUtils.showElement('#resultTitle');
    DOMUtils.getElement('#result').innerText = string;
  },
};

export default DOMUtils;
