# 구현 기능 목록
## 기능 0 : 상수 정리
- $result, $input, $submit, $restart
- 에러 메세지
- 재시작 메세지
- 야구 게임에서 필요한 숫자

## 기능 1 : 정답 생성
- 컴퓨터는 1~9 까지 서로 다른 임의의 수 3개를 선택한다.
- 컴퓨터의 랜덤 값은 MissionUtils 라이브러리의 Random.pickNumberInRange를 사용해 구한다.

## 기능 2 : User 입력 판단
### 2-1) 에러인 경우
```
1. 길이가 3이 아닌 경우
2. 1 ~ 9 사이의 숫자가 아닌 경우
3. 중복이 있는 경우
```
- `alert 메세지`
- `재입력`

### 2-2) 에러가 아닌 경우
```
1. 같은 수 + 같은 자리 : 스트라이크
  - strikeCount : index로 값 비교
2. 같은 수 + 다른 자리 : 볼
  - ballCount : includes 메서드 + index 값 비교
3. 0볼 0스트라이크 : 낫싱
  - ballCount + strikeCount === 0 으로 판단
```
- `힌트 출력`
- `다시 User 입력 후 기능 3 : User 입력 판단`

### 2-3) 정답
- 3스트라이크
  - strikeCount === 3 으로 판단
- `게임 종료 메세지 출력`
- `게임 재시작 버튼 출력`
  - 게임을 다시 시작하는 재시작 button 태그는 game-restart-button id를 가진다.
    - 예) `<button id="game-restart-button">재시작</button>`

## 기능 3 : 게임 종료 및 재시작
- 게임 재시작 버튼을 누르면
  - `inputField 초기화`
  - `기능 1 : 정답 생성` 
  
