<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>
</p>
<h1 align="middle">숫자 야구 게임</h1>



---
### 커밋 템플릿
#### 1. 제목 형식 => [label]: <title> 

+ 제목은 한글로 작성
+ 제목을 작성하고 반드시 빈 줄 한 줄을 만들어야 함
+ 제목에 .(마침표) 금지

#### 2. label 리스트
  
+ Feature : 새로운 기능
+ Bug : 버그 수정
+ Update : 기존의 코드 및 파일 업데이트
+ Docs : 문서 (문서 추가, 수정, 삭제)
+ Test : 테스트 용
+ Etc : 기타 변경사항

#### 3. Description
  
내용의 길이는 한 줄당 60글자 내외에서 줄 바꿈. 한글로 간단 명료하게 작성
어떻게 보다는 무엇을, 왜 변경했는지를 작성할 것 (필수)
  
#### 4. Issue-number
  
연관된 이슈 첨부, 여러 개 추가 가능
  
참고: https://jeong-pro.tistory.com/207

---
### 구현할 기능 목록 정리
  
1. Com에서 랜덤 숫자를 생성
  
+ 3자리의 수
+ 숫자끼리는 중복 허용X
+ 숫자는 1부터 9중에 선택
  
2. User에서 숫자를 입력 받음
+ 3자리의 수( 1부터9사이에 정수만 입력 가능)
+ 숫자끼리는 중복 허용X
+ User이 잘못 입력할시 alert 후 재입력
  
3. Com과 User의 숫자 비교
+ 확인 클릭시 숫자 비교
  
4. Com과 User의 숫자 비교 후 
  +정답 출력
    게임 종료 안내와 재시작 버튼 생성
  +힌트 출력
    Com의 숫자는 그대로, User가 재입력
  
5. 정답 후 재시작
  +Com에서 랜덤 숫자를 다시 생성
  +result의 html 초기화

<br>



