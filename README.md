# ⚾ 미션 - 숫자 야구 게임

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

<br>

## 👉 구현할 기능 목록

#### 상대방 숫자 설정하기

- 1부터 9까지의 서로 다른 수로 이루어진 세 자리 수를 생성한다.(`computerInputNumbers`)

#### 사용자 숫자 입력받기

- 사용자가 '확인' 버튼을 누르면 form 태그에 입력된 내용을 가져온다.(`userInputNumbers`)
- 유효성을 검증한다.
  - 만일 유효하지 않다면, 아래 중 해당되는 메세지를 alert창으로 보여준 후 다시 입력받는다.
    - 아무것도 입력하지 않은 경우: "❗ 숫자야구게임 진행을 위해 세 자리 숫자를 예상해서 입력해 주세요."
    - 문자가 포함된 경우: "❗ 숫자만 입력해주셔야 합니다. 다시 입력해 주세요."
    - 0이 포함된 경우: "❗ 1부터 9까지만 입력해주셔야 합니다. 다시 입력해 주세요."
    - 숫자의 자릿수가 세 자리가 아닌 경우: "❗ 세 자리 숫자로 입력해 주셔야 합니다. 다시 입력해 주세요."
    - 중복된 숫자가 포함된 경우: "❗ 서로 다른 숫자로 입력해주셔야 합니다. 다시 입력해 주세요."

#### 사용자 숫자 채점하기

- 스트라이크 점수와 볼 점수를 0으로 초기화한다. (`scoreStrike, scoreBall`)
- 사용자 숫자 세 자리를 각각 검사하면서 아래 기준에 해당되면 해당 점수를 증가한다.
  - 상대방 숫자와 자리까지 일치할 경우: '스트라이크'를 1 증가시킨다.
  - 상대방 숫자와 자리가 일치하지는 않지만 상대방 숫자에 포함되는 경우: '볼'을 1 증가시킨다.

#### 결과 스트링 출력

- 만일 '3 스트라이크'일 경우 `<b>🎉정답을 맞추셨습니다!🎉</b>\n 게임을 새로 시작하시겠습니까?` 메세지 출력 후 게임 재시작 버튼을 함께 띄운다.
- 그게 아니라면 아래의 순서로 출력한다.
  - (볼이 있다면) 'n볼 '을 먼저 출력한다.
  - 그 후 (스트라이크가 있다면) 'n스트라이크'를 출력한다.
  - 만일 볼도 스트라이크도 없다면 '낫싱'을 출력한다.

#### 게임 재시작 여부 결정

- 사용자가 '게임 재시작' 버튼을 누르면 출력된 내용을 지워주고 게임시작 단계로 돌아간다.
