export const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);

export const alertErrorMessage = (errorMessage) => {
  window.alert(errorMessage);
};
