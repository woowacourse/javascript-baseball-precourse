<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>
</p>
<h1 align="middle">숫자 야구 게임</h1>

## 🎯 구현할 기능 목록

1. 컴퓨터 숫자(정답) 생성
   - 1-9의 중복되지 않는 3자리 수
   - MissionUtils 라이브러리의 Random.pickNumberInRange를 사용하기
2. 사용자 입력 값 유효성 확인
   - 1-9의 중복 검사
   - 3자리 숫자인지 검사
   - 숫자만 입력했는지 검사
3. 컴퓨터 숫자와 사용자 입력 값 비교
   - 자리, 값 같으면 strike
   - 값만 같으면 ball
   - 자리, 값 하나도 같은게 없으면 낫싱
4. 정상 출력
   - ? 볼
   - ? 스트라이크
   - ?볼 ?스트라이크
   - 낫싱
5. 에러 출력
   - 사용자가 잘못된 입력 값을 입력한 경우(alert이용)
6. 종료
   - 사용자가 3 strike를 달성한 경우
   - 재시작 버튼 활성화
7. 재시작 버튼
   - 재시작 버튼을 누르면 새로운 게임 시작
   - 컴퓨터의 새로운 정답 생성
