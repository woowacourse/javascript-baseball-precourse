# ⚾ 미션 - 숫자 야구 게임

## ⚙️ 기능 순서 분석

기본적으로 문제 해결 순서는 다음과 같다.

```
게임을 시작하면 정답인 3자리 랜덤 숫자를 생성한다.
이때 랜덤 숫자의 자리수들은 서로 다른 숫자이며 0이 아닌 수이다.

이후, 사용자에게 3자리 숫자를 입력 받는다.
받은 숫자의 자리수들은 서로 다른 숫자이며 0이 아닌 수여야 하고, 이에 해당되면 alert를 통해 잘못 입력을 알리고 재입력받는다

정답수와 받은수를 비교해 숫자 야구 게임을 수행한다.
우선 스트라이크 여부를 확인한다.
이후 스트라이크 아닌 수에서 볼 여부를 확인한다.

수행한 게임의 결과를 출력한다.
이때 만약 3스트라이크 (정답수 == 입력받은수) 이면 게임의 결과를 출력하는 대신
정답을 맞추었음을 알리고 게임을 종료하고 게임 재시작 버튼을 생성한다.
```

<br>

## 👨‍💻 구현 기능 목록

위의 기능 순서를 토대로 구현해야 할 기능은 다음과 같다.

1. **랜덤 3자리 수 생성** `generateRandomNumber`

   : 1부터 9까지의 수중 랜덤 숫자를 생성해 3자리 수를 만든다 

   <br>

2. **3자리 숫자 입력 받기** `handleSubmit`

   : `확인` 버튼을 눌렀을때 사용자 입력을 캐치한다

   <br>

3. **숫자 유효성 확인** `checkVaild`

   : 주어진 숫자가 조건에 맞는 수인지 확인하고 아니면 alert를 출력하고 False를 반환한다.

   <br>

4. **야구 게임 수행** `play`

   : 2개의 3자리로된 숫자를 받아 야구게임을 수행 결과를 반환한다

   <br>

5. **스트라이크 여부 확인** `countStrike`

   : 2개의 숫자에서 스트라이크의 개수를 파악한다.

   <br>

6. **볼 여부 확인** `countBall`

   : 2개의 숫자에서 볼 개수를 파악한다

   <br>

7. **결과일때 내용 출력** `showGameResult`

   : 야구 게임 결과를 html 상에 출력한다

   : 만약 정답이면, 정답일때 보여지는 html을 출력한다

   <br>

8. **게임 시작 기능** `startGame`

   : 주어진 사용자 입력의 유효성을 검사하고 야구게임을 수행해 그 결과를 html 상에 출력한다

   <br>

9. **게임 초기화 기능** `resetGame`

   : 컴퓨터 랜덤수를 생성하고, 결과 내 html을 지우고 야구게임을 준비한다

<br>

## 🎯 기능 요구사항

- 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
- 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
  - 123을 제시한 경우 : 1스트라이크
  - 456을 제시한 경우 : 1볼 1스트라이크
  - 789를 제시한 경우 : 낫싱
- 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작할 수 있다.
- 게임을 종료한 후 id가 `game-restart-button`인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다. 
  - `예) <button id="game-restart-button">재시작</button>`

<br>

## 💻 프로그래밍 실행 결과

![baseball_result](https://user-images.githubusercontent.com/50367798/100166088-32473e00-2eff-11eb-9454-5d45e648b37e.jpg)

<br>

## ✅ 프로그래밍 요구사항

- `play`(컴퓨터의 랜덤 값, 유저의 입력 값) 메서드를 만들어 게임을 진행한다.
- `play`메서드는 `String`으로 결과값을 return 한다.
- `index.js`에서 아래의 function 또는 class 형태를 활용한다.

```javascript
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

- 스트라이크와 볼이 같이 있는 경우 볼을 먼저쓰고, 스트라이크를 쓴다.
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.

<br>

## 📝 미션 저장소 및 진행 요구사항

- 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.

<br>

## 🔗 참고 링크

미션 진행이 어렵다면 아래 링크를 참고한다.

- DOM
  - [MDN DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)
- alert
  - [MDN alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)
- javascript module
  - [module](https://ko.javascript.info/modules-intro)
- event
  - [이벤트](https://ko.javascript.info/introduction-browser-events)
  - [이벤트 위임](https://ko.javascript.info/event-delegation)
