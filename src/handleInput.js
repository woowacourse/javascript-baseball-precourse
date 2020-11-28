export default class HandleInput {
  constructor() {
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
  }
  
  GetInput(input) {
    let userValue = this.IS_NOT_VALID;

    if (this.CheckInputValidity(input.value) === this.IS_VALID)
      userValue = input.value;
    
    this.InputFieldConvenience(input, userValue);

    return userValue;
  }
  
  CheckInputValidity(number) {
    const notZero = this.NotZero(number);
    const isNumber = this.IsNumber(number);
    const noOverlap = this.NoOverlap(number);
    const isThreeDigits = this.IsThreeDigits(number);

    if (notZero * isNumber * noOverlap * isThreeDigits === this.IS_NOT_VALID) {
      this.CreateErrorMessage(notZero, isNumber, noOverlap, isThreeDigits);
      return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }

  NotZero(number) {
    if (number.indexOf("0") !== -1)
      return this.IS_NOT_VALID;

    return this.IS_VALID;
  }

  IsNumber(number) {
    for (let i = 0; i < number.length; i++) {
		  if (!(number[i] >= 1 && number[i] <= 9))
        return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }

  NoOverlap(number) {
    for (let i = 0; i < number.length; i++) {
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

  CreateErrorMessage(notZero, isNumber, noOverlap, isThreeDigits) {
    let errorMessage = '';

    if (notZero === this.IS_NOT_VALID)
      errorMessage += '0이 아닌 ';
    
    if (isNumber === this.IS_NOT_VALID)
      errorMessage += '1~9까지의 ';
    
    if (noOverlap === this.IS_NOT_VALID)
      errorMessage += '중복되지 않는 ';
    
    if (isThreeDigits === this.IS_NOT_VALID)
      errorMessage += '세 개의 ';
    
    errorMessage += '숫자를 입력해주세요';
    this.AlertErrorMessage(errorMessage);
  }

  AlertErrorMessage = (errorMessage => alert(errorMessage));

  InputFieldConvenience(input, userValue) {
    input.value = '';
    input.focus();
    if (userValue !== this.IS_NOT_VALID)
      input.placeholder = userValue;
  }	
}