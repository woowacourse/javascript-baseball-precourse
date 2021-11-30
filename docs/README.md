<h1 align="middle">⚾️ 숫자 야구 게임</h1>

## 👀 게임 설명
숫자 야구 게임은 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

## 📃 기능 목록
> 미션으로 주어진 기능 요구사항, 프로그래밍 요구사항을 반영하여 구현할 기능 목록을 만들었습니다.<br>
> 체크박스 이모지를 클릭하면 관련 프로그래밍 요구사항이 나타납니다.

### 💬 &nbsp;사용자 입력

- [x] 사용자에게 숫자 3개를 입력받는다.
- [x] 입력된 숫자에 중복이 없는지 확인한다.
- [x] 아래와 같은 입력 오류가 있다면 적절히 처리한다.
  - 입력된 숫자에 중복이 있는 경우
    - [x] `alert` 로 중복임을 알리는 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.
  - 입력 값에 숫자가 아닌 문자 등이 포함되어 있는 경우
    - [x] `alert` 로 숫자만 입력하라는 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.
  - 입력 값에 공백이 있는 경우
    - [x] 공백을 제거한 후 그 외에는 입력 오류가 없는지 확인한다.
      입력에 오류가 있으면 경우에 따라 적절히 처리한다.
- [x] 각 에러 메시지는 상수로 관리한다.

### 🎯 &nbsp;숫자 야구 게임

- [X] 게임이 시작되면 컴퓨터 숫자 3개를 랜덤하게 선정한다.
  <details>
    <summary>✅ &nbsp;게임 진행 메서드 <code>play</code></summary>
    <ul>
      <li><code>play(컴퓨터의 랜덤 값, 유저의 입력 값)</code> 메서드를 만들어 게임을 진행한다.</li>
      <li><code>play 메서드</code>는 <code>String</code>으로 결과값을 return 한다.</li>
      <li><code>index.js</code>에서 아래의 function 또는 class 형태를 활용한다.
        <pre><code>export default function BaseballGame() {
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
  play(123, 124); // '2스트라이크'</code></pre>
      </li>
    </ul>
  </details>
  <details>
    <summary>✅ &nbsp;랜덤 값 생성</summary>
    <ul>
      <li>랜덤 값 생성은 <a href="https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils"><code>MissionUtils</code> 라이브러리</a>의 <code>Random.pickNumberInRange</code>를 사용한다.</li>
    </ul>
  </details>
- [x] 입력된 숫자와 컴퓨터 숫자를 비교하여 결과를 출력한다.
  - 입력된 숫자와 컴퓨터 숫자가 다른 경우
    - [x] 같은 수가 같은 자리에 있으면 `스트라이크` 힌트를 출력한다.
    - [x] 같은 수가 다른 자리에 있으면 `볼` 힌트를 출력한다.
    - [x] 같은 수가 전혀 없으면 `낫싱` 힌트를 출력한다.
  - 입력된 숫자와 컴퓨터 숫자가 같은 경우
    - [x] 정답임을 알리는 메시지를 출력한다.
    - [x] 재시작 버튼이 노출된다.
  <details>
    <summary>✅ &nbsp;힌트 출력</summary>
    <ul>
      <li>볼과 스트라이크가 같이 있는 경우 볼, 스트라이크 순서로 힌트를 출력한다.</li>
    </ul>
  </details>
- [x] 재시작 버튼이 클릭되면 새로운 게임을 시작한다.
  - [x] 컴퓨터 숫자 3개를 랜덤하게 다시 선정한다.
  - [x] 이전 입력 값이나 결과 메시지가 있다면 제거한다.
  <details>
    <summary>✅ &nbsp;재시작 버튼</summary>
    <ul>
      <li>게임을 다시 시작하는 재시작 button 태그는 <code>game-restart-button</code> id를 가진다.</li>
    </ul>
  </details>

