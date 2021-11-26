function displayText(parent, text) {
  const typography = document.createElement('span');
  typography.innerText = text;

  parent.appendChild(typography);
}

export default displayText;
