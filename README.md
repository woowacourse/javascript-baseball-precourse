first commit

## 구현할 기능 목록

### 기본 규칙
1. 기본 규칙: 유저가 컴퓨터의 수를 맞추는 게임이다.
2. 숫자 구성: 숫자는 다음 조건을 만족해야 한다.
    - 숫자는 **1~9까지의 수**로 구성된다.
    - 숫자는 **서로 다른 수**로 구성된다.
    - 숫자는 **3자리**로 구성된다.
2. 힌트 : 유저가 확인버튼을 누르면 힌트를 표시한다.
    - 같은 수가 같은 자리에 있으면 '스트라이크'
    - 같은 수가 다른 자리에 있으면 '볼'
    - 같은 수가 전혀 없으면 '낫싱'
    - 스트라이크와 볼이 같이 있는 경우 볼을 먼저쓰고, 스트라이크를 쓴다.
3. 컴퓨터의 역할: 컴퓨터는 1~9까지 서로 다른 숫자 3개를 선택한다
    - 컴퓨터가 고른 숫자는 `2. 숫자 구성`을 만족해야 한다.
4. 입력: 게임 플레이어는 3개 숫자를 입력한다
    - 유저가 입력하는 숫자는 `2. 숫자 구성`을 만족해야 한다.
    - 유저가 잘못된 입력 값을 작성한 경우 `alert`를 이용해 메세지를 보여주고, 재입력할수 있게 한다.
5. 출력: 컴퓨터는 입력한 숫자에 대한 결과를 출력한다
    - 유저가 정답을 맞힌 경우 정답 안내 문구를 출력한다
    - 맞히지 못한 경우 `2.힌트`를 출력한다
6. 게임 종료: 게임을 종료한 후 게임을 다시 시작할 수 있다
    - 유저가 정답을 맞히면 게임이 종료된다
    - 게임을 종료한 후 id가 game-restart-button인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다.

## 실행법

1. npm run serve
2. live server (vscode extension)

## 주의
기능 요구사항, 프로그래밍 요구사항, 과제 진행 요구사항 세 가지를 지킬 것

## 참고

- Readme 작성법: <https://dev-hyun.tistory.com/147>
- commit template: <https://junwoo45.github.io/2020-02-06-commit_template/>
- eslint & prettier 설정: <https://velog.io/@_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0>, <https://velog.io/@velopert/eslint-and-prettier-in-react>,<https://velog.io/@kyusung/eslint-config-2>

## 생각해본 것

- html 안에 onclick을 달았다. undefined 에러가 나는 이유를 몰랐다. 세상에.
- document.querySelector('#user-input').textContent가 아니라 .value다
- template이 vue나 react에만 있는줄 알았는데 html5에서 지원하는 기능이었다!
- DOM에 객체를 동적으로 추가하는 방법: 1. createElem (노드로 추가하는 방법) 2. innerHTML(HTML script로 추가하는 방법) 3. insertAdjacentHtml, Elem, Text (HTML script로 추가하는 방법)
- 이벤트 리스너도 달거니까 createElem써서 다는게 제일 나을듯 (https://www.javascripttutorial.net/javascript-dom/javascript-createelement/)
- 기능 목록 단위로 commit 추가하는게 어렵네...
- (고민) DOM에 값 넣는 기능과 게임을 진행하는 기능은 분리해야하지 않을까? => class baseball 분리
- (고민) 그냥 바벨로 바꿔버리면 server 돌릴 필요 없지 않나?
- (고민) 내코드 왜이렇게 더럽지. 다른사람들은 어떻게 저렇게 깨끗하지? indent때문인가?
- (고민) 메소드이름짓기 어려워서 다른사람꺼 차용했다(handle어쩌구)
- (고민) 다른사람들은 어떻게 저렇게 적은 커밋만으로 완성했지?? 
- (고민) DOM Event 조절하는 애랑 Game을 진행하는거랑 구분했는데 움 뭔가 같이 놔두는게 낫나
- (에러) `index.js:44 Uncaught TypeError: this._generateAnswer is not a function
    at HTMLButtonElement.initGame (index.js:44)`
    구조: 
    ```js
    export default class BaseballGame {
    constructor() {
        this.initGame();
    }

    _generateAnswer() {
        // 랜덤 숫자 생성후 리턴
    }

    initGame() {
        this._computerInputNum = this._generateAnswer() // FIXME: 에러발생!
    }

    }

    const game = new BaseballGame();

    const testMethods = () => {
    document.querySelector('#submit').addEventListener('click', () => {
        const restartBtn = document.createElement('button');
        restartBtn.id = 'game-restart-button';
        restartBtn.textContent = '재시작';
        restartBtn.addEventListener('click', game.initGame);
        document.querySelector('#result').appendChild(restartBtn);
    });
    };

    ```