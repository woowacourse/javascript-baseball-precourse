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

<details>
<summary>회고</summary>
  
## 2021/11/24
### 구현할 기능 목록을 먼저 작성한다는 것이 낯설어도 아래 두 가지는 파악하자
> 가장 쉬운 것 부터 하나씩 해결해 나가자
1. 상수로 둘 수 있는 것
2. 각 액션에서 필요한 기능들

### readme는 꼼꼼히 작성하자
> 구현할 기능 목록을 보면서 작성해야 기능단위 커밋을 실천할 수 있고, 삽질을 안한다
지금은 규모가 매우 작은 프로젝트이기 때문에 단순히 readme만 수정하고 넘어가는데에 그치지만, 프로젝트 규모가 조금만 커져도 유의미한 시간과 노력의 손실이 발생할 것 같다고 느꼈다.

### 문자열 내에서 숫자 판별
> 유저 입력에 숫자 외의 문자가 포함되어있는지를 판별하는 함수에서 더 좋은 방법이 없는지?  
> <b>`-12` `1e9` 처럼 문자가 포함되어 있어도 숫자로 취급되는 예외의 해결을 위해</b>
1. 문자열을 통째로 `isNan`으로 확인 -> `-12` `Infinity` `1e9` 의 케이스에서 실패
2. `isNan(str) && isNan(parseInt(str))`로 확인 -> `1e9`의 케이스에서 실패  
3. 문자 요소 하나씩 확인 -> <b>일단 채택. 근데 이게 최선인가?</b>

</details>
