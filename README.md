## 🎯 기능 요구사항

### 기능 1: 컴퓨터의 정답 생성

- [x] 컴퓨터는 1에서 9까지 서로 다른 임의의 자연수 3개를 선택한다.
- [x] MissionUtils 라이브러리 설치하기
- [x] 컴퓨터의 랜덤 값은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 Random.pickNumberInRange를 사용해 구한다.

### 기능 2: 사용자가 입력한 값 유효성 체크

- [x] 사용자 입력 시, 공백은 제거한다.
- [x] 사용자는 중복된 숫자를 입력할 수 없다.
- [x] 사용자가 잘못된 값(숫자 3개 이외 값)을 입력한 경우, alert로 에러 메시지를 보여준다.
- [x] 다시 input 값을 초기화 시키고 재입력할 수 있게 한다.

### 기능 3: 사용자로부터 입력받은 값을 컴퓨터가 생성한 값과 비교하기

- [x] 유저의 입력값을 화면에 나타내기
- [x] 컴퓨터 저장 값과 사용자 입력 값의 순서에 상관없이 몇 개의 숫자가 같은지 확인한다. 이후 그 개수를 '볼'로 저장한다.
- [x] 컴퓨터 저장 값과 사용자 입력 값이 동일한 위치에 동일한 숫자가 있는 경우, 그 개수를 '스트라이크'로 저장한다.

#### 세부 기능1: 게임에서 승리했을 경우 (재시작 버튼이 나올 경우)

- [x] 만약 스트라이크가 3개 나올 경우, 게임은 종료되고 '재시작' 버튼이 표시된다.
  > - 게임을 다시 시작하는 재시작 button 태그는 `game-restart-button` id를 가진다.
  >   예) `<button id="game-restart-button">재시작</button>`
- [x] '재시작' 버튼을 누를 시 다시 '재시작' 버튼이 사라지며, 컴퓨터의 정답 생성 기능으로 넘어간다.

#### 세부 기능2: 스트라이크가 아닐 경우

- [x] '볼'값과 '스트라이크' 값이 모두 0인 경우, '낫싱'을 반환한다.
- [x] '스트라이크' 값이 0이고, 볼 값이 1 이상일 경우, '볼'의 개수만 반환한다.
- [x] '스트라이크' 값이 1 이상이고, 볼 값이 1 이상일 경우, '스트라이크'의 개수와 '볼'의 개수를 순서대로 반환한다.

### 4. 리팩토링 - 작성했던 함수 모듈화하기

- [x] `compareAnswer` 함수를 `countBallsAndStrikes`와 `showBallsAndStrikes` 함수로 분리하기
- [] 만들었던 각 함수를 `utils` 디렉토리 내부에서 `import`로 가져와서 사용하기
- [x] 로직에 적합한 변수명, 함수명 사용하기

### 5. 버그

- [x] 재시작 시 컴퓨터가 생성한 답안이 재생성되지 않던 버그 수정하기

### 테스트

- [] cypress 테스트 성공 여부 확인하기
