# ⚾️ 숫자 야구 게임
## index.js
#### 0. 지역변수
  - 결과창
  - 확인 버튼
  - 사용자 입력창
  - _blockInput
  - InputUtils 클래스
  - 정답

<br>

#### 1. 사용자값 입력 이벤트
  - 이벤트는 다음 두 가지 상황에 발생
    - '확인' 버튼 클릭 이벤트
    - 입력창에서 키보드 '엔터' 입력 이벤트
  - 이벤트가 발생할 때마다 `PlayIfValide()` 호출

<br>

#### 2. `PlayIfValid()`
  - 사용자 입력값이 유효하면('notValid'가 아니면) 게임 실행
    - `play()`와 `DisplayResult()` 호출

<br>

#### 3. `play()` 볼과 스트라이크로 판단한 결과메시지 리턴
  - 볼과 스트라이크를 카운트하는 함수 호출 `CountBallStrike()`
  - 볼과 스트라이크 개수를 결과메시지에 저장
    - 볼의 개수, 볼, 스트라이크 개수, 스트라이크 순으로 저장
  	- 볼이나 스트라이크 중 0이 아닌 것만 저장
  	- 둘 다 0이면 '낫싱'으로 저장
    - 정답인 경우 결과메시지는 'success'로 저장

<br>

#### 4. `CountBallStrike()` 볼과 스트라이크 개수 카운트해서 리턴
  - 정답과 사용자 입력값을 인자로 받아 확인
  - 볼과 스트라이크는 0으로 매번 초기화
  - 인덱스 0~2동안 확인
    - 숫자배열과 정답배열의 항이 같으면 스트라이크++
    - 다른 경우 숫자배열의 항이 정답배열에 존재하면 볼++

<br>

#### 5. `DisplayResult()` 출력값을 받아 화면에 출력
  - 결과값이 'success'면 `IsCorrect()` 호출
  - 아니면 `IsWrong()` 호출

<br>
<br>

## handleInit.js
#### 1. `InitGame()` 게임 시작
  - `GenerateAnswer()` 호출해서 정답 생성 후 리턴
  - `InitGameWindow()` 호출

<br>

#### 2. `GenerateAnswer()` 정답 생성 후 리턴
  - `OneToNine()` 호출해서 1~9까지 담긴 candidate 배열 생성
  - `InitGameWindow()` 호출해서 게임화면 초기화
  - `PickRandomDigits()` 호출해서 정답 생성 후 리턴

<br>

#### 3. `InitGameWindow()` 게임화면 초기화
  - 결과창 비우기
  - 입력창 비우기
  - placeholder 비우기
  - 입력창에 focus()

<br>

#### 4. `OneToNine()` 1~9 숫자 배열 생성
  - 1부터 9까지의 숫자를 담은 candidate 배열 리턴

<br>

#### 5. `PickRandomDigits()`
  - candidate 배열에서 중복없이 랜덤으로 숫자 세 개 선택
  - 선택된 숫자들은 새로운 배열에 담아 리턴

<br>
<br>

## handleInput.js
#### 1. `GetInput()` 사용자 입력값 리턴
  - `CheckInputValidity()` 호출해서 인풋값이 유효한지 확인
  - `InputFieldConvenience()` 호출
  - 인풋이 유효하면 입력값 리턴
  - 인풋이 유효하지 않으면 'notValid' 리턴

<br>

#### 2. `CheckInputValidity()` 사용자 입력값을 받아 유효한지 체크하는 함수
  - 유효성 검사하는 함수들 호출 `NotZero()`, `IsNumber()`, `NoOverlap()`, `IsThreeDigits()`
  - 유효하지 않으면 `CreateErrorMessage()` 호출
  - 유효하면 'isValid' 리턴

<br>

#### 3. `NotZero()` 0이 있는지 체크
  - 0이 없으면 리턴 1
  - 0이 있으면 리턴 0

<br>

#### 4. `IsNumber()` 모두 숫자인지 체크
  - 모두 숫자면 리턴 1
  - 모두 숫자인 것이 아니면 리턴 0

<br>

#### 5. `NoOverlap()` 중복이 있는지 체크
  - 중복이 없으면 리턴 1
  - 중복이 있으면 리턴 0

<br>

#### 6. `IsThreeDigits()` 세자리인지 체크
  - 세자리면 리턴 1
  - 세자리가 아니면 리턴 0

<br>

#### 7. `CreateErrorMessage()` 조건에 따른 에러메시지 생성
  - 조건에 따른 에러메시지 추가항목
    - NotZero가 0이면 += '0이 아닌'
    - IsNumber가 0이면 += '1~9까지의'
    - NoOverlap이 0이면 += '중복되지 않는'
    - IsThreeDigits가 0이면 += '세 개의'
  - 에러 메시지 += ' 숫자를 입력해주세요`
  - `AlertErrorMessage()` 호출

<br>

#### 8. `AlertErrorMessage()` 에러메지시 alert
  - 에러메시지 alert

<br>

#### 9. `InputFieldConvenience()` 입력창 편의기능 제공
  - 인풋창 비우기
  - 인풋창 focus() 편의기능 제공
  - 유효한 입력값은 placeholder에 기록

<br>
<br>

## handleResult.js
#### 1. `IsCorrect()` 정답인 경우의 결과창 관리
  - _blockInput을 true로 전환 후 `BlockBeforeRestart()` 호출
  - `DisplaySuccessMessage()` 호출해서 정답 결과창 출력
  - `HandleRestartButton()` 호출해서 재시작버튼 클릭 이벤트 관리

<br>

#### 2. `BlockBeforeRestart()`
  - _blockInput이 true인 동안 입력이 들어오면 alert('게임을 재시작해주세요')
  - _blockInput이 false면 리턴 0

<br>

#### 3. `DisplaySuccessMessage()` 정답 결과 메시지 생성 및 출력
  - 결과 메시지 생성해서 결과창에 출력
    - '게임을 새로 시작하시겠습니까?'
    - **🎉 정답을 맞추셨습니다! 🎉**
  - '게임 재시작' 재시작 버튼 생성

<br>

#### 4. `HandleRestartButton()` 재시작 버튼 누르면 재시작
  - 재시작 버튼 누르면
    - _blockInput을 false로 전환
    - `RestartGame()` 호출해서 게임 재시작

<br>

#### 5. `IsWrong()` 오답인 경우의 경과창 관리
  - 결과창에 결과 메시지 출력