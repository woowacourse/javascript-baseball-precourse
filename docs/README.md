## 기능 요구사항 분석

- 1~9 까지의 숫자 3개를 Random하게 생성

  - Random.pickNumberInRange 사용
  - set을 사용해 서로 다른 숫자로 이루어진 수 생성

- 플레이어로부터 입력 받기

- 유저의 입력값이 올바른지 확인

  - 0이 포함 된 경우 alert
  - 숫자가 아닐 경우 alert
  - 길이가 3이 아닐 경우 alert
  - 중복된 숫자가 있을 경우 alert

- 야구 점수 계산

  - 같은 수 갯수(A)
  - 같은 수 이면서 같은 자리 갯수(B)
  - 점수 계산
    - ball = A-B
    - strke = B

- 출력

  - strike ball 둘 다 존재 : {ball}볼 {strike}스트라이크
  - strike 만 존재 : {strike}스트라이크
  - ball 만 존재 : {ball}볼
  - stike ball 둘 다 없을 때 : 낫싱
  - alert일 시 표기하지 않음

- 게임종료

  - 3 strike 인 경우 : 재시작 버튼 생성
  - 3 strike 아닌 경우 : 입력 다시 받기

- 재시작

  - location.reload()를 이용해서 게임 종료 후 재시작
