# ⚾ 프리코스 1주차 미션 - 숫자 야구 게임

## 🎯 학습 목표

- Git 과 Readme 작성을 토대로 버전, 문서 관리의 중요성을 이해한다.
- Java Script의 모듈 기능을 도입하여 구조적으로 프로그래밍 한다.

## 🎯 기능 목록

- 3자리로 이루어진 난수를 생성.
  - 각 자리에 위치한 값이 서로 중복되지 않아야 함.
- 브라우저의 입력값을 받아와 변수에 할당.
  - 입력 값에 대한 예외 처리 ⇒ `alert` 을 이용해 메시지 송출.
    - 중복이 있을 때.
    - 입력된 값이 세 자리가 넘을 때.
    - 숫자가 아닌 다른 값이 들어왔을 때.
- 생성된 난수와 브라우저의 입력 값을 비교.
  - 스트라이크의 개수를 세기.
  - 볼의 개수를 세기.
- 재시작 버튼을 눌렀을 때 reload.

## ✔️ 이슈

- 추상적인 단계에 따라 함수를 작성하게 될 때, 가장 상위의 함수는 어느 위치에 있어야 하는지?
- randomNumber는 브라우저가 onload 되는 시점에 단 한번 할당되어야한다. 그래야 재시작이 될 때만 새로운 난수를 생성한다.
