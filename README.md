# 우테코 프리코스: 숫자 야구 게임
**이승재**

---
**프로젝트 요약:** 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임 구현하기. 세부적인 과제 내용은 [과제 깃허브](https://github.com/woowacourse/javascript-baseball-precourse)를 참조하면 된다. 

![baseball_result_gif](https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/result.gif?raw=true)



## 기능 목록

1. 컴퓨터 숫자 랜덤 생성하기: 1부터 9까지 서로 다른 수로 이루어진 3자리의 수 만들기.

 	* 1-9 랜덤 숫자를 MissionUtils 라이브러리를 사용해서 생성
	* 앞에 생선된 숫자랑 겹치는 지 확인.
	* {숫자: index} 오브젝트로 저장하기 
	
2. 유저 입력값 확인하기:
	* 입력값이 1-9로 이루어진 3자리수 인지 확인.
	* 중복이 없는지 확인
	* 요구상황 불충족시 alert를 통해 에러 메세지 보여준다.

3. 실제 게임 `play` 함수 구현
	* 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`인 스트링을 리턴.

4. 결과 및 재시작 구현
	* 유저가 올바른 입력값으로 게임에 참여했을 경우, `play` 결과를 보여주는 UI 화면 구현. 
	* 정답일 경우, 재시작 할 수 있는 버튼을 구현. 


