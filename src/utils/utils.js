export const $ = selector => document.querySelector(selector);

// eslint-disable-next-line prettier/prettier
export const getNumArr = notNumArr => notNumArr.toString().split('').map(num => Number(num));

export const resetOutput = () => {
  $('#result').innerHTML = '';
  $('#user-input').value = '';
};
