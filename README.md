# ⚾ 미션 - 숫자 야구 게임

컴퓨터가 생성한 임의의 서로 다른 수로 이뤄진 3자리 수를 맞추는 웹게임

## 😀 데모

[플레이하기](https://jho2301.github.io/javascript-baseball-precourse/)

## 🎯 기능 구현 목록

1. 컴퓨터, 임의의 수 생성하기
2. 사용자 입력 받기 (예외 시, alert 띄운 후 다시 입력 받기)
   1. [예외] 세 자리 양의 정수 인지
   2. [예외] 숫자 외에 다른 문자가 포함되어 있는지
   3. [예외] 중복되는 숫자가 있는지
3. 결과 연산하기
   1. 같은 자리의 같은 수 카운팅
   2. 다른 자리의 같은 수 카운팅
4. 결과 출력하기
   1. 다른 자리의 같은 수: 볼 (스트라이크보다 먼저 출력)
   2. 같은 자리의 같은 수: 스트라이크
   3. 일치하는 숫자가 없을 경우: 낫싱
   4. 정답(스트라이크 3개)일 경우: 🎉**정답을 맞추셨습니다**🎉, 재시작 여부 묻기
5. 재시작하기
   1. 임의의 수 재생성
   2. 결과 출력부분 clear
   3. input부분 clear

## 🌲디렉토리

```plaintext
├── LICENSE
├── README.md
├── babel.config.js
├── index.html
├── jest.config.mjs
├── package-lock.json
├── package.json
├── test
│   ├── main.spec.js
│   └── utils.spec.js
└── src
    ├── components
    │   ├── game-result.js // 게임결과를 나타내는 컴포넌트 클래스
    │   └── user-input.js // 사용자의 입력을 받는 컴포넌트 클래스
    ├── index.js // 게임을 초기화, 진행하는 클래스
    └── library
        ├── constants
        │   ├── alert-message.js // alert메시지 문자열 상수 모음
        │   ├── number.js // 일반적인 숫자 상수 모음
        │   ├── playResult.js // 게임 결과 메시지 문자열 상수 모음
        │   ├── random-number.js // 게임 내 랜덤 숫자 생성에 관련된 상수 모음
        │   └── state.js // 상태에 관련된 상수 모음
        ├── core
        │   ├── component.js // 모든 컴포넌트가 상속받는 추상클래스
        │   ├── computed-state.js // 다른 상태를 기반으로 연산된 상태 클래스
        │   └── state.js // observable, 값을 set하면 등록된 render들을 수행한다
        └── utils
            ├── check.js // 검증하는 함수 모음
            └── getRandomNumber.js // 난수 생성 함수 모음

7 directories, 22 files
```

## 👀 신경을 쓴 부분

- 과제의 로직이 UI와 상호작용하기에 컴포넌트 개념으로 문제에 접근하기로 하였습니다. (관심사의 분리가 가능해짐)
- 사용자 입력을 받는 태그를 form태그로 바꾸었습니다.
  - [이유1] text input 태그에서 enter를 치면 submit으로 이벤트가 발생한다. (사용자경험 개선)
  - [이유2] 이벤트타입을 submit으로 감지할 수 있다. (코드의 중복, 가독성 개선)
- text input을 clear하는 시점에 대한 고민을 해보았습니다.
  - 사용자가 입력을 하면, 자신이 입력한 숫자 & 결과값을 통해 정답을 유추해야 합니다.
  - 따라서 게임 재시작 시, 잘못된 수 입력 시에만 text input태그를 clear 하도록 하였습니다.
- 사용자 입력 시, 에러 요인이 두 개 이상일 경우 각각의 요인을 alert 메시지에서 파악할 수 있도록 하였습니다. (사용자경험 개선)
