export default class CheckInput {
  GetInput(input) {
    let userValue = '';

    if (this.CheckInputValidity(input.value) === 1) {
      alert("1~9까지의 중복되지 않는 세자리 숫자를 입력해주세요");
      input.placeholer = input.value;
      input.value = '';
      input.focus();
      userValue = 'notValid';
      return userValue;
    }
    
    userValue = input.value;
    input.placeholder = userValue;
    input.value = '';
    input.focus();

    return userValue;
  }

	CheckInputValidity(number) {
    let isValid = 0;

	  if (number.indexOf("0") !== -1)
      isValid = 1;

	  if (number.length !== 3)
      isValid = 1;

	  for (let i = 0; i <= 2; i++) {
		  if (!(number[i] >= 1 && number[i] <= 9))
        isValid = 1;

		  if (number.split(number[i]).length - 1 !== 1)
		    isValid = 1;
    }

	  return isValid;
	}
}