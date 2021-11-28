// 1부터 9까지 3개의 중복되지 않는 수를 뽑는 함수
export const pickUniqueThreeNumbers = () => {
  const numberSet = new Set();
  while (numberSet.size !== 3) {
    numberSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return Array.from(numberSet);
};

// string으로 된 숫자들을 배열로 리턴하는 함수
export const changeStringToNumberArray = (string) => {
  return string.split('').map(item => Number(item));
};

// 배열의 요소들이 중복되지 않는지 검증하는 함수
export const validateUniqueInArray = (array) => {
  const set = new Set();
  array.map((item) => set.add(item));
  return set.size === 3 ? true : false;
};

// 배열의 요소들이 숫자인지 검증하는 함수
export const validateNumberInArray = (array) => {
  const isNumberArray = array.map((item) => isNaN(item));
  return isNumberArray.includes(true) ? false : true;
};

// 같은 자리에 있는 요소인지 혹은 포함하는 요소인지 확인하는 함수
export const checkSameOrInclude = (array1, array2) => {
  let same = 0, include = 0;
  for (let i = 0; i < 3; i += 1) {
    if (array1[i] === array2[i]) same += 1;
    else if (array1.includes(array2[i])) include += 1; 
  }
  return [same, include];
};

// 힌트 문자열을 count에 따라 반환하는 함수
export const createResultHintString = (count, hint) => (
  count ? `${count}${hint}` : ''
);
