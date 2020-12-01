# ⚾ 미션 - 숫자 야구 게임

## ✔️ 주어진 요구사항 

- [기능요구사항](#기능-요구사항)
- [프로그래밍 요구사항](#프로그래밍-요구사항)
- [미션 저장소 및 진행 요구사항](#미션-저장소-및-진행-요구사항)

## ✔️ 주어진 참고사항

- [프로그래밍 실행 결과](#프로그래밍-실행-결과)
- [참고 링크](#참고-링크)

## ✔️ 구현할 기능 목록(함수 별)

1. 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 랜덤으로 선택해 정답을 생성하는 `randomNumberMaker` 함수
2. 게임을 시작하는 `playGame` 함수
3. 유저의 입력을 받는 `userInput` 함수
4. 유저의 입력의 유효성을 검사하는 `isValidUserInput` 함수
5. 유저의 입력을 받고 볼이 몇 개인지 세는 `countBall` 함수
6. 유저의 입력을 받고 스트라이크가 몇 개인지 세는 `countStrike` 함수
7. 유저의 입력을 받고 맞춘 결과를 출력하는 `printResult` 함수
8. 결과의 내용을 클리어하는 `clearResult` 함수
9. 게임이 끝났는 지 판단하는 `isGameEnded` 함수
10. 게임을 다시 시작하는 `restartGame` 함수
11. 게임 재시작 버튼을 만들어주는 `makeRestartBtn` 함수

## ✔️ 숫자 야구 게임 회고 (2020.11.25 ~ 2020.12.01)

### 기능과 순서
- 미션에서 주어진 요구사항에 적힌대로, 개발에 들어가기 전에 먼저 구현해야 하는 `기능`과 `순서`에 대해 고민하고 정리했다. 이런 고민이 아직 미숙해 머릿속으로만 생각하기 조금 어려워서(하핫) 기능의 순서도를 직접 손으로 그려보며 주어진 요구사항을 파악했다. (이마저도 완벽하지 않아 개발하는 중간 중간 추가하고 삭제하기도 했다.) 바로 개발에 들어가는 것보다 어떻게 개발을 해나가야 할 지 더 명확하게 그려졌고, 하나씩 도장깨기 한다는 느낌으로 기능을 만들다보니 재미도 붙어 즐겁게 개발할 수 있었다. 앞으로도 개발하기 전에 구현할 기능과 그 순서에 대해 고민하는 시간을 먼저 가져야 겠다.

### 함수
- 평소에 개발을 하며 함수를 만들 때, 처음에는 한 가지 기능을 하는 함수를 목표로 했지만, 계속 코드를 덧붙여 기능도 많아지고 코드도 길어지는 기이한(?) 일들이 많았다. 이번에는 indent depth가 3이 넘지 않도록 구현하라는 주어진 요구사항대로 개발하려 노력하다보니, 코드가 조금 더 깔끔해졌고 이에따라 각각의 함수도 `더 명확하게 자신만의 한가지 일`을 잘 수행하게 된 것 같다. 그리고 이렇게 만들다보니 함수를 가져다가 쓰기도 편하고, 응용하기도 좋았다. 

### 코딩 컨벤션
- 공식 문서에 적힌 `코딩 컨벤션`에 유의하며 개발을 했다. 어떤 상황에서 어떻게 코드를 만드는 것이 좋은지, 조금 더 읽기 쉽고 다른 사람들과 `협업`하기 좋은 코드는 어떤 것인지에 대한 고민을 할 수 있었다. 

---


## 기능 요구사항

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

## 프로그래밍 실행 결과

![baseball_result](https://user-images.githubusercontent.com/50367798/100166088-32473e00-2eff-11eb-9454-5d45e648b37e.jpg)

<br>

## 프로그래밍 요구사항

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

## 미션 저장소 및 진행 요구사항

- 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.

<br>

## 참고 링크
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
