//2. 입력한 숫자 확인

export default function isValid(input) {
  if (isNaN(input)) {
    console.log("숫자를 입력해주세요");
  } else {
    if (input.length !== 3) {
      console.log("세자리 숫자를 입력해주세요");
    } else {
      if (input.includes(0)) {
        console.log("1부터 9까지 숫자를 입력해 주세요");
      } else {
        const inputArray = [...new Set(input)];
        if (inputArray.length !== 3) {
          console.log("중복 없이 입력해 주세요");
        } else {
          return true;
        }
      }
    }
  }
}
