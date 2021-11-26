## 구현할 기능 목록 
<hr>

### 컴퓨터가 값을 생성하기 

[X] 1 ~ 9 사이의 서로 다른 임의의 수를 3개 random하게 선택한다 

[X] 숫자를 random하게 생성할때에는 Random.pickNumberInRange를 사용한다 

[X] 컴퓨터가 생성한 값은 유저가 게임을 끝낼때까지 동일하게 유지한다 

[ ] 유저가 재시작 버튼을 누르면 값을 새로 생성한다


### user에게 정보 입력 받기 

[X] 유저에게 user-input을 통해서 값을 입력 받기 

[X] 유저가 입력한 값이 중복되거나 빈값 또는 길이가 3 미만일때 alert로 에러 메시지를 보여준다

[X] alert로 에러 메세지를 보여 준 후 userinput.value를 비운다 

### user에게 받은 값 과 컴퓨터가 생성한 값 비교하기

[X] 유저가 입력한 숫자와 컴퓨터가 생성한 숫자를 비교하여서 같은 자리 같은 값의 개수를 구한다 

[X] 유저가 입력한 숫자와 컴퓨터가 생성한 숫자를 바교하여서 다른 자리 같은 값의 개수를 구한다

[X] 유저가 입력한 숫자가 컴퓨터가 생성한 숫자와 같은 수 같은 자리에 있으면 '스트라이크' 라고 result에 출력하기

[X] 유저가 입력한 숫자가 컴퓨터가 생성한 숫자와 같은 수 다른 자리에 있으면 '볼' 이 라고 result에 출력하기

[X] 유저가 입력한 숫자가 컴퓨터가 생성한 숫자와 모두 다른 숫자라면 '낫싱' 이라고 result에 출력하기

[X] 스트라이크, 볼의 결과값은 같이 나타날 수 있다 ex) 1볼 1스트라이크

[X] 스트라이크, 볼은 중복되어 값이 나타날 수 있다 ex) 2스트라이크 , 3볼 등등

[X] 스트라이크와 볼이 동시에 나왔을 때에는 볼을 먼저 쓰고 스트라이크 후에 쓴다  

### 게임을 진행할 때에 

[X] 유저가 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다 

[X] 게임이 종료되면 게임이 종료되었음을 화면에 문구를 띄운다 

[X] 게임이 종료되면 game-restart-button id를 가진 재시작 버튼을 보여준다

<hr>

## 프로그래밍 요구 사항 

[X] play(컴퓨터의 랜덤 값, 유저의 입력 값) 메서드를 만들어서 게임을 진행한다 

[X] play 메서드는 String을 결과값으로 return한다 

[X] index.js에서 아래의 function 또는 class 형태를 활용한다 

```
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

// 예시
play(123, 456); // '낫싱'
play(123, 345); // '1볼'
play(123, 432); // '2볼'
play(123, 312); // '3볼'
play(123, 145); // '1스트라이크'
play(123, 134); // '1볼 1스트라이크'
play(123, 132); // '2볼 1스트라이크'
play(123, 124); // '2스트라이크'

```
 