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
    - 게임이 종료되면 확인버튼을 누를 수 없다
    - 게임을 종료한 후 id가 game-restart-button인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다.

## 실행법

1. live server (vscode extension) 설치
2. index.html 우클릭 > Open with LiveServer

## 실행 화면

![img](https://res.cloudinary.com/dtttkj2mc/image/upload/v1606484086/etc/woowacourse-1-2_xayqnh.png)

## 참고

- Readme 작성법: <https://dev-hyun.tistory.com/147>
- commit template: <https://junwoo45.github.io/2020-02-06-commit_template/>
- eslint & prettier 설정: <https://velog.io/@_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0>, <https://velog.io/@velopert/eslint-and-prettier-in-react>,<https://velog.io/@kyusung/eslint-config-2>
