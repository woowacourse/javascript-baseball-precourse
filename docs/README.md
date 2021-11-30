# 구현할 기능 목록

:baseball: `숫자 야구 게임` :baseball:이 구현해야 할 기능을 정리합니다.



## 개발환경 설정하기

[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commit/22c0a5642b70d66bf291e97519120e0aa999b8f3)

- [x] eslint 설정: airbnb convetion을 사용한다.



## 숫자 야구 게임

### 사용자의 입력 값 검사하기

[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commit/76983105c807490e1210bb3bf3d27b0cc4455e52)

사용자의 입력 값은 `1~9`까지의 수 중 중복 없이 세 개의 수를 고른 것이다.

- [x] 문자열이 `1`부터 `9`까지의 수로만 이루어져있는가
- [x] 문자열의 길이가 3인가
- [x] 수에 중복이 없는가



### 컴퓨터의 랜덤 값과 사용자의 입력 값을 비교하기

[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commit/70882014fa774bd920dc9978324d6cebe8da7450)

- [x] 컴퓨터의 랜덤 값과 사용자의 입력 값을 비교하여 `힌트 문자열`을 만든다. 
  - [x] `스트라이크`, `볼`, `낫싱`에 따라 `힌트 문자열`을 생성한다. 단 볼 - 스트라이크 순으로 쓴다.
  - [x] `스트라이크`: 같은 수가 같은 자리에 있다면 1 증가
  - [x] `볼`: 같은 수가 다른 자리에 있다면 1 증가
  - [x] `낫싱`: `스트라이크`와 `볼`의 값이 0이라면 `낫싱`에 해당한다.
  - [x] 한편 컴퓨터의 랜덤 값과 사용자의 입력 값이 일치한다면 성공을 의미하는 특정 문자열을 반환한다.



### 컴퓨터의 랜덤 값 생성하기

~~[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commit/72698bcd8cbcf89e6d568de592a212a07aa748d3)~~
[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commit/db8de44639da9c6975f78c6dc285aa963d00ad04)

- [x] 컴퓨터의 랜덤 값을 생성한다.
  - [x] ~~dependency 추가: [`mission-utils`](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)~~
  - [x] CDN을 사용한다.



### 게임 재시작하기

[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commit/40cae774c820b3d6dcfa7eae608b730eb6ed14e5)

게임을 재시작한다.

- [x] `result` 엘리먼트의 내용을 초기화한다.
- [x] 컴퓨터의 랜덤 값을 초기화한다.
- [x] `user-input` 엘리먼트의 입력 값을 초기화한다.



### 결과 표시하기

[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commit/ed1bf6e614af6eb7286d88edcf7670a81537d93d)

- [x] 비교 결과에 따라 `result` 엘리먼트의 내용을 바꾼다.
  - [x] 성공이 아니면 결과 값 문자열을 넣는다.
  - [x] 성공이라면 다음과 같이 화면에 표시한다.
    - [x] `button` 태그는 `game-restart-button` id를 가진다.

![result_success](result_success.PNG)

- [x] `game-restart-button` button 엘리먼트를 누르면 게임을 재시작한다.



### 사용자의 입력 값에 따라 동작하기

[완료 커밋](https://github.com/leegwae/javascript-baseball-precourse/commits/main)

`submit` 버튼은 `user-input`의 값에 따라 `onclick`시 동작이 다르다.

- [x] 버튼이 눌리면 사용자의 입력 값을 제시된 형식을 만족하는지 검사한다. ([참고- 사용자의 입력 값 검사하기](#사용자의-입력-값-검사하기))
- [x] 사용자의 입력 값이 제시된 형식을 만족하지 않는다면 다음 동작을 수행한다.
  - [x] `alert`로 에러 메시지를 출력한다.
  - [x] `user-input` 엘리먼트의 값을 초기화한다.
  - [x] `user-input` 엘리먼트에 포커스한다.
- [x] 사용자의 입력 값이 제시된 형식을 만족하면 컴퓨터의 랜덤 값과 비교한다.  ([참고 - 컴퓨터의 랜덤 값과 사용자의 입력 값을 비교하기](#컴퓨터의-랜덤-값과-사용자의-입력-값을-비교하기))

