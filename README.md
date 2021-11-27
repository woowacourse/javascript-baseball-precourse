<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>
</p>
<h1 align="middle">숫자 야구 게임</h1>

## 🎯 요구사항

### 📝 게임 시나리오

1. 컴퓨터는 `랜덤 3자리 숫자를 생성`한다.
2. 클라이언트가 숫자를 입력하고 확인을 눌렀을 때 입력창에 `입력한 숫자에 대해 정해둔 유효성을 검증`한다. (숫자 / 3자리 / 중복값)
3. `사용자가 입력한 숫자와 컴퓨터가 제공하는 숫자`가 얼마나 일치하는지 검증한다.
4. `정답이 아닐 때 hint를 제공`한다.
5. `정답을 맞췄다면` 게임을 종료하고 `재시작 가능`하게 한다.

### 🖼 코딩 컨벤션

1. 코딩 컨벤션 지키기
2. indent 2까지 지키기
3. Google, Airbnb, NHN FE개발랩, JS Standard Style 참고하기
4. 함수는 한 가지 일만 하게 최대한 작게 하기(15라인 넘어가게 하지 않기)
5. var가 아닌 const, let을 사용하기
6. import를 이용해서 스크립트를 모듈화해서 불러오기

## ❗️ 최종 점검

- 랜덤 라이브러리 Math.Random 대신 MissionUtils 라이브러리 사용
<!-- - 컴퓨터의 랜덤 값은 반드시 JavaScript의 `Math.Random` 대신 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다. (`MissionUtils`은 window객체 내에 포함되어 있음) -->

- 테스트 진행하기!
- `console.log` 제거

## 🌟 한계를 넘어

- `리팩토링` 해보기
- `예외처리` 해보기
