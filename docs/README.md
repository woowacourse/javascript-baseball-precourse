# 구현 기능 목록

> 1 - 9 범위의 서로 다른 수로 이루어진 3자리 수를 맞추는 게임 구현

### 🛠 초기화

1. `input` 값 초기화
2. EventListener 등록 (클릭 이벤트, 입력 이벤트)
3.

### 🛠 랜덤 정답 생성

woowacourse 에서 제공해주는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils) 사용

```
    pickNumberInRange(start, end)
    start - end 범위의 랜덤함 숫자를 반환
```

- [x] 각 자릿수가 겹치지 않는 랜덤한 3자릿수를 생성하는 `getComputerNumbers` 구현

---

### 🛠 이벤트 처리

1. 클릭 이벤트
   - [x] 정답 확인 버튼
     - [x] `input` 값을 매개변수로 `checkError`함수와 `play`함수 호출
   - [x] 재시작 버튼 - 재시작 버튼은 유동적으로 생성되므로 상위 Element (`id='result'`)의 클릭 이벤트로 작성
     - [x] 재시작 버튼 클릭시, 초기화 진행

2. 입력 이벤트
   - [x] 사용자가 input form 을 통해 입력한 값을 `input` 변수에 저장

---

### 🛠 입력값 처리

> 입력값에 따른 결과 처리
>
> `잘못된 데이터` 여부를 판단하는 `checkError` 함수 작성
>
> 함수를 통해 `볼`과 `스트라이크` 개수를 문자열 형태로 리턴하는 `play`함수 작성



- [x] 힌트 - 해당하는 문자열을 `id='result'` element 에 출력

| Message | 설명 |
|---|---|
| 낫싱 | 일치하는 숫자가 없음 |
| N볼 | N개의 일치하는 숫자가 있으나 위치가 맞지 않음 |
| N스트라이크 | 올바른 위치의 N개의 일치하는 숫자가 있음 |
| M스트라이크 N볼 | M + N개의 일치하는 숫자가 있으며 그 중 M개만 올바른 위치에 있음 |

- [x] 정답
  - `id='result'` element에 정답 message 표시

- [x] 잘못된 데이터
  - 숫자가 아닌 문자(열), 중복된 자리숫자, 세자리 숫자가 아닌 숫자 etc..
  - 해당 메시지를 `alert`로 출력

---

| 날짜 | 변경 내용 |
|---|---|
| 11.27 | 랜덤 정답 생성, 이벤트 처리, 입력값 처리 기능 기술 |
| 11.28 | 함수 이름 변경, 오타 정정, 완료사항 표시 |