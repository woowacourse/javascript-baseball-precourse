<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>
</p>
<h1 align="middle">숫자 야구 게임</h1>

## 🎯 기능 구현 목록
- 유저와 컴퓨터 난수를 초기화
- 컴퓨터의 난수를 생성
    - 1부터 9까지의 수
    - 중복을 허용하지 않음
    - 3개의 숫자를 생성
- 사용자 입력이 올바른지 확인
    - 입력이 숫자인지
    - 3글자인자
    - 1~9 범위 내인지
    - 중복된 수가 있는지
- 결과를 출력할 DOM 생성
- 성공이라면 재시작 버튼 생성
    - 재시작 버튼의 `submit` 이벤트 추가

## 🔍 폴더구조

```plaintext
├── .gitignore
├── .npmrc
├── .cypress.json
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── index.js 
    ├── constants
    │   ├── alert-message.js // alert 메시지 모음
    │   ├── game-rule.js // 게임 내 규칙에 사용되는 상수 모음
    │   ├── initial-state.js // 초기 컴퓨터 난수, 사용자 입력 값
    │   ├── result-message.js // 출력 결과 메시지 모음
    └── 
```
