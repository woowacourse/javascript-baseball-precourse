# 숫자 야구게임

## 📚 파일 구조

```
├── LICENSE
├── README.md
├── .gitignore
├── .prettierrc
├── index.html
└── src
    ├── index.js -> 게임을 진행하는 모듈을 호출하는 메인 모듈
    │
    ├── game -----> 게임 진행과 관련된 모듚을 모아놓은 폴더
    │   ├── playGame.js ---------> 게임을 진행하는 모듈
    │   ├── getGameResult.js ----> 게임 결과를 계산해주는 모듈
    │   └── printGameResult.js --> 게임 결과를 화면에 출력해주는 모듈
    │
    └── input ----> Computer와 USER의 인풋과 관련된 모듈을 모아놓은 폴더
        ├── getUserInput.js -----> USER에게 인풋을 받는 모듈
        ├── checkValidInput.js --> USER의 인풋이 올바른지 확인하는 모듈
        └── getComputerInput.js -> 컴퓨터의 인풋(정답)을 생성하는 모듈
```

## 🎯 기능구현 목록

- validate : 3자리의 숫자만이 입력받게한다.
  - 만약 올바르지 못한 입력일 경우 input창을 비우고, alert을 보여준다.
- printHint : 올바른 input인 경우 innerText를 보여준다.
  - 스트라이크 : 올바른 자리, 올바른 숫자 할 때
  - 볼 : 올바른 자리는 아니지만 숫자가 존재할 때
  - 낫싱 : 모든 경우가 틀린 때
- play : 컴퓨터가 생성한 랜덤값과 유저의 input 값을 인자로 받는다.
  - valudate를 실행한다.
  - isComplete를 통해 정답일 때, replay 함수를 호출한다.
  - printHint을 실행한다.
- replay
  - play함수가 True를 return하면 실행된다.
  - 정답을 맞추셨습니다 메세지와 함께
  - 새롭게 시작할수 있는 replay button을 보여준다.
