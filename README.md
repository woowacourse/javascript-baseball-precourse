<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>
</p>
<h1 align="middle">숫자 야구 게임</h1>


## 커밋 메세지
1. 메세지 구조
<type>(<scope>): <subject> -- 헤더 
<BLANK LINE> -- 빈 줄 
<body> -- 본문 
<BLANK LINE> -- 빈 줄 
<footer> -- 바닥 글

출처: https://xtring-dev.tistory.com/entry/Git-규칙적인-Commit-메세지로-개발팀-협업하기-👾 [xtring.dev]
2. 메세지 규칙
  * 제목과 본문을 행으로 구분
  * 제목은 50자 이내로 작성
  * 제목의 첫 글자는 대문자
  * 제목의 끝에는 마침표를 사용하지 않음
  * 본문의 각 행은 72자 이내
  * '어떻게'보다 '무엇', '왜'를 설명

3. Type
  * feat : 새로운 기능에 대한 커밋
  * refactor : 리팩토링에 대한 커밋
  * test : 테스트 코드 수정에 대한 커밋
  * docs : 문서 수정에 대한 커밋
  * style : 코드 포맷, (;) 누락 등에 대한 커밋
  * update : 기존 코드 및 파일 업데이트에 대한 커밋


## 구현할 기능 목록
1. Computer에서 랜덤 숫자 생성
  * 범위 1 ~ 9
  * 중복되지 않은 숫자들로 3자리 숫자 생성

2. User에게 숫자 입력 받기
  * 범위 1 ~ 9
  * 중복되지 않은 숫자들로 3자리 입력
    * 입력이 올바르지 못하면 alert으로 알림

3. 정답 확인
  3-1 : Computer = User
    * 게임 종료
    * 재시작 버튼 노출
      * 재시작 버튼 Click -> HTML 초기화, 1번으로 다시
  
  3-2 : 부분 일치
    * 사용자에게 힌트 제공
      * 같은 수가 같은 자리에 있는 경우 : 스트라이크
      * 같은 수가 다른 자리에 있는 경우 : 볼
      * 같은 수가 없는 경우 : 낫싱 