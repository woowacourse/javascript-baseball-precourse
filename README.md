# 숫자 야구 게임_조혜송

### 구현기능

1. 난수를 생성하는 함수
    - 중복되지 않는 난수를 3개를 생성해야한다.
    - 반복문을 사용하여, 난수가 겹치는게 있는지 확인한다.
    - 이때,난수의 자료형을 String 으로 한다.

2. 사용자로 부터 입력 값이 올바른지 확인하는 함수
    - 숫자의 길이는 3이어야 하며, 중복된 숫자가 있으면 알림을 띄워준다.
    - 입력값을 초기화하고, 재입력 하도록 focus를 준다.

3. 컴퓨터의 숫자와 사용자의 입력 값을 비교하는 함수
    - 반복문을 활용하여,사용자와 컴퓨터의 숫자가 일치한지 확인한다.
    - 각 자리수의 숫자별로 비교를 진행하며, 문자열과 자리수가 같으면 strike값을, 문자열만 같으면 bols 값을 증가해준다.

4. 결과를 출력하는 함수
    - 만일 stike가 3가 아닐시에, 결과를 String으로 출력해준다.

5. 게임 재실행 화면을 그려주는 함수
    - 만일 stike가 3이면, 재실행을 권유하는 화면을 그려준다.
    - 재 실행에 응하는 버튼을 그려주면, 1번 함수를 실행해 게임을 시작한다.

### 기능 별 예외 사항 및 주의 사항

- 사용자로 부터 입력 받은 값 올바른지 확인 :
  + 입력받은 값이 3이 아니거나, 3이지만 중복된 숫자가 있을 경우
  + 숫자가 아닐 경우
