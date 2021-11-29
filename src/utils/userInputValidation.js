const userInputValidation = value => {
  const validation = {
    isError: false,
    inValidText: '',
  };

  if (!value) {
    validation.isError = true;
    validation.inValidText = '값을 입력해주세요.';
    return validation;
  }

  if (isNaN(Number(value))) {
    validation.isError = true;
    validation.inValidText = '숫자를 입력해주세요.';
    return validation;
  }

  if (value.length !== 3) {
    validation.isError = true;
    validation.inValidText = '숫자 3개를 입력해주세요.';

    return validation;
  }

  const set = new Set(value.split(''));
  if (value.length !== set.size) {
    validation.isError = true;
    validation.inValidText = '중복된 숫자를 입력하였습니다. 다시 입력해주세요.';
    return validation;
  }

  return validation;
};

export default userInputValidation;
