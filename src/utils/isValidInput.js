function hasDuplicate(str) {
  return str.length !== (new Set(str)).size;
}

function isValidInput(userInput) {
  return (
    Number.isInteger(Number(userInput)) // 정수인가
		&& userInput.length === 3	// 길이가 3인가
		&& !userInput.includes(0) // 0을 포함하지 않는가
		&& !hasDuplicate(userInput) // 중복된 문자를 포함하지 않는가
  );
}

export default isValidInput;
