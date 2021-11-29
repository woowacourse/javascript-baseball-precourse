-   기본 세팅 (node 버전 업데이트, js 파일 생성, docs 파일 생성)

##구현해야할 기능 목록

-   컴퓨터 숫자 랜덤 생성 함수
-   값 입력시, 결과 출력 (스트라이크, 볼, 낫싱, 정답(3스트라이크))
-   정답 맞출시 게임 종료 후 재시작 버튼 노출
-   재시작 버튼 클릭시, 게임 초기화 후 재시작 가능
-   잘못된 값 입력(ex. 중복되는 숫자)시 alert로 에러메세지를 띄우고, 재입력 할수 있게끔 설정

#질문

-   cypress를 처음 접해봅니다. cypress에 있는app.spec.js파일이 DOM이 attach 되는 순서는 어떻게 되나요?
    -   user-input에 있는 값이 바뀌는 것은 확인이 되는데, document로 접근을 하면 값이 ''로 나와서 인식을 하지 못합니다.
    -   computerInputNumber의 생성은 window가 load되기 전에 생성이 되는건가요? 해당 값에 접근하는 방법을 모르겠습니다.
    -   즉, app.spec.js에서 선언된 userInputNumber와 computerInputNumber의 값을 js파일에서 받는 방법을 모르겠습니다
