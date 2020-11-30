# ⚾ 미션 - 숫자 야구 게임

## 📌생각 정리

우선 게임의 흐름을 **play(진행), newGame(리셋), end(종료)**로 크게 세 파트로 나누었다. 그 후 각각의 흐름에 필요한 함수를 따로 구현하여 추가하기로 했다. 

1) play
2) newGame
3) end

또, **버튼** 구현을 따로 분리하였다. 두 가지의 버튼이 존재하므로 크게 5파트로 나누었다.  

4) submitButton
5) resetButton

<br>

## 📌함수 목록

- `BaseballGame()` 내부
  - `computer` - 컴퓨터가 생성한 숫자 *(속성)*
  - `user` - 유저가 입력한 숫자 *(속성)*
  - `play`- **게임 진행** 컴퓨터가 생성한 숫자와 유저가 입력한 숫자를 인자로 받아서 결과 메세지를 리턴한다.
  - `newGame` - **새 게임 시작** this.computer를 새로운 숫자로 교체하고 this.user을 null값으로 바꾼다. 
  - `end` - **게임 종료** `submit`버튼 비활성화, `result`를 초기화, end result를 출력, `game-restart-button`버튼을 생성한다. 
  - `submitButtonClickEvents` - **submit버튼**의 클릭이벤트를 정리해 둠. this.user의 값을 업데이트하고, 정답이 아닌 경우는 play()를 실행하고 정답인 경우는 end()를 실행한다. 
  - `addResetButton` - **reset버튼**을 `result`에 추가한다.
  - `createResetButton` - `reset`버튼을 생성한다.
  - `resetButtonClickEvents` - `game-restart-button`버튼의 클릭이벤트를 정리해 두었다. submit버튼 활성화, 새 게임 시작.

<br>

- `BaseballGame()` 외부
  - `getInputNumbers` - `user-input`의 `value`를 리턴한다. 
  - `printPlayResult` - `play`에 해당하는 결과를 출력한다.
  - `disableSubmitButton` - `submit`버튼을 비활성화한다.
  - `printEndResult` - `end`에 해당하는 결과를 출력한다. 
  - `clearResultMessage` - `result`를 clear한다.
  - `isCapableNumber` - Number을 입력받았을 때 조건에 맞는지 확인한다.
  - `isWrongValue` - 입력받은 값이 조건에 맞는지 확인한다. 
  - `createRandomNumber` - `Math.random()`을 이용해 3자리 수를 생성한다. 
  - `splitNumbers` - 입력받은 `Number`을 `Array` 형태로 분리해 리턴한다.
  - `countBallStrike` - `볼`, `스트라이크` 갯수를 센다.
  - `createBallStrikeMessage` - `볼`, `스트라이크` 갯수에 해당하는 힌트를 생성한다.

<br>

## 🎯 기능 요구사항

- [x] 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
- [x] 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다. 
  *  createBallStrikeMessage, ResultMessage

- [x] 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- [x] 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- [x] 게임을 종료한 후 게임을 다시 시작할 수 있다.
- [x] 게임을 종료한 후 id가 `game-restart-button`인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다. 

<br>

## 🎯 기능 추가

- [x] 게임이 끝나고 종료 화면이 나오면 `submit`버튼이 비활성화된다. 게임을 재시작하면 다시 활성화된다. 

<br>

## ✅ 프로그래밍 요구사항

- [x] `play`(컴퓨터의 랜덤 값, 유저의 입력 값) 메서드를 만들어 게임을 진행한다.
- [x] `play`메서드는 `String`으로 결과값을 return 한다.
- [x] `index.js`에서 아래의 function 또는 class 형태를 활용한다.
  * function을 활용하였다. 
- [x] 스트라이크와 볼이 같이 있는 경우 볼을 먼저 쓰고, 스트라이크를 쓴다.
- [x] 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
  * 0이 포함된 숫자, 0으로 시작하는 수, 문자열, 3자릿수 외의 수를 제외시켰다. 
- [x] 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- [x] **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다 
  * 변수명을 camelCode 형식으로 작성하였다. 
  * ESLint를 이용해 재확인하였다. 
- [x] **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  * 게임 실행에 이중 for문을 사용하지 않았다. 
- [x] **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
  * 한 함수가 최대한 5줄을 넘어가지 않도록 하였다. 넘어가는 경우엔 분리하였다. 
  * 함수명에 해당하는 기능만 동작하게 하였다. 
  * 재활용할 수 있는 기능이 있으면 함수로 분리하여 사용했다. 
<br>

## ✅ 프로그래밍 추가
- [x] 확장성을 고려하였다. 숫자가 3개 이상이 되었을 때 수정이 용이하도록 함수를 구현하였다. 
- [x] **변수명**과 **인자**와 **출력** 모두 `볼`=>`스트라이크` 순서로 작성하였다. 
- [x] 처음에 나눈 흐름 순서대로 함수를 정리하였다. 

<br>
