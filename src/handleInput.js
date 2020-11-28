export default class HandleInput {
  constructor() {
    const IS_VALID = 1;
    const IS_NOT_VALID = 0;
  }
  
  GetInput(input) {
    let userValue = '';

    if (this.CheckInputValidity(input.value) === this.IS_VALID)
      userValue = input.value;
    else
      userValue = this.IS_NOT_VALID;

    return userValue;
  }
  


  NotZero(number) {
    if (number.indexOf("0") !== -1)
      return this.IS_NOT_VALID;

    return this.IS_VALID;
  }

  IsNumber(number) {
    for (let i = 0; i <= 2; i++) {
		  if (!(number[i] >= 1 && number[i] <= 9))
        return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }

  NoOverap(number) {
    for (let i = 0; i <= 2; i++) {
		  if (number.split(number[i]).length - 1 !== 1)
        return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }
  
  IsThreeDigits(number) {
	  if (number.length !== 3)
      return this.IS_NOT_VALID;

    return this.IS_VALID;
  }

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

	
}