export const $ = selector => document.querySelector(selector);

export const getNumArr = notNumArr => {
  return notNumArr
    .toString()
    .split('')
    .map(num => Number(num));
};

export const resetOutput = () => {
  $('#result').innerHTML = '';
  $('#user-input').value = '';
};
