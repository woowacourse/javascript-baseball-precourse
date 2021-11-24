<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>
</p>
<h1 align="middle">숫자 야구 게임</h1>

## 🎯 구현할 기능 목록
### 1. 컴퓨터의 난수를 생성
```
1부터 9까지의 수
중복을 허용하지 않음
3개의 숫자를 생성
```

### 2. `확인` 버튼의 submit 이벤트
- 유저 입력이 올바른지 확인
``` 
유저 입력이 숫자인가?
유저 입력이 3자리인가?
1~9 범위의 범위 안에 있는가?
중복된 수가 있는가?
```
- 올바른 입력이라면 
```
컴퓨터의 난수와 비교하는 함수 실행
```
- 올바른 입력이 아니라면
```
alert를 통해 잘못된 부분 알림
input을 초기화
```

### 3. 유저 입력과 컴퓨터의 난수를 비교
- 유저 입력이 포함되면서 자리가 다르면 `ballCount` 증가
- 유저 입력이 포함되면서 자리가 같으면 `strikeCount` 증가

### 4. 비교한 내용을 바탕으로 결과를 출력
- `ballCount`를 먼저 출력하고 `strikeCount`를 출력
- `strikeCount`가 3일 경우 `정답을 맞추셨습니다` 출력
- `ballCount`와 `strikeCount`가 모두 0일 경우 `낫싱` 출력

### 5. 3스트라이크인 경우 DOM 생성
- `게임을 새로 시작하시겠습니까?` 텍스트 생성
- `게임 재시작` 버튼 생성
- `확인` 버튼 활성화 해제

### 6. 게임 재시작 버튼의 submit 이벤트
- 유저 입력과 컴퓨터의 난수 초기화
- `ballCount`와 `strikeCount` 초기화
- `확인` 버튼 활성화
- `result` 초기화

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
├── docs
│   ├── README.md
└── src
    ├── index.js 
    ├── constants
    │   ├── alert-message.js // alert 메시지 모음
    │   ├── game-rule.js // 게임 내 규칙에 사용되는 상수 모음
    │   ├── initial-state.js // 초기 컴퓨터 난수, 사용자 입력 값
    │   └── result-message.js // 출력 결과 메시지 모음
    │
    ├── functions
    │   ├── check-user-input-valid.js // 유저 입력이 올바른지 판별하고, 올바르지 않다면 alert를 호출하는 함수
    │   └── make-random-number.js // 컴퓨터가 난수를 만들어 저장하는 함수
    │
    └── state
        └── index.js // 유저 입력, 컴퓨터 난수, 볼 개수, 스트라이크 개수 저장할 상태
```
