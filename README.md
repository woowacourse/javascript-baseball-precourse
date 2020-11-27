## ⚾️ 숫자 야구 게임
#### 1. 시작/재시작할 때 답 리턴
  - 중복 없이 1~9의 수로 구성된 세자리 숫자 생성
    - 게임 시작시마다 한 번 생성
    - 정답 배열에 입력

<br>

#### 2. 사용자 입력값을 받아 리턴
  - 유효하면 숫자 배열에 입력
  - input창 비우기

<br>

#### 3. 사용자 입력값을 받아 유효한지 체크
  - 다음의 경우 에러 alert: "1~9까지의 중복되지 않는 세자리 숫자를 입력해주세요"
    - 0이 있는 경우
	- 중복되는 숫자가 있는 경우
    - 세자리 수가 아닌 경우
    - 숫자가 아닌 경우

<br>

#### 4. 볼과 스트라이크 개수 카운트해서 리턴
  - 사용자가 유효한 수를 입력할 때마다 볼과 스트라이크는 0으로 초기화
  - 인덱스 0~2동안 확인
    - 숫자배열과 정답배열의 항이 같으면 스트라이크++
    - 다른 경우 숫자배열의 항이 정답배열에 존재하면 볼++

<br>

#### 5. 볼과 스트라이크 개수 받아 출력값 리턴
  - 볼의 개수, 볼, 스트라이크 개수, 스트라이크 순으로 출력
  - 볼이나 스트라이크 중 0이 아닌 것만 출력
  - 둘 다 0이면 `낫싱` 출력
  - 정답이면 게임 재시작 버튼 생성

<br>

#### 6. 출력값을 받아 화면에 출력
  - 출력값이 있으면 화면에 출력
  - 출력값이 없으면 (정답이면) 재시작 버튼 생성
  - 새로운 출력값을 받거나 재시작버튼이 눌리면 결과창 비우기