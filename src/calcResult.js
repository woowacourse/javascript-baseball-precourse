// 정답 숫자 배열과 사용자 입력 숫자 배열을 비교하여 스트라이크과 볼의 개수를 세고, 그 결과를 반환하는 함수
export const calcResult = (computerInputNumbers, userInputNumbers) => {
    const result = {
        strikeCnt: 0,
        ballCnt: 0
    };

    for (let i = 0; i < computerInputNumbers.length; i++) {
        if (computerInputNumbers[i] === userInputNumbers[i]) {          // 스트라이크
            result.strikeCnt++;
        }
        else if (computerInputNumbers.includes(userInputNumbers[i])) {  // 볼
            result.ballCnt++;
        }
    }

    return result;
};