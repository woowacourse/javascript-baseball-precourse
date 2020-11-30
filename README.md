# ⚾ 미션 - 숫자 야구 게임

## 기능 목록

- BaseballGame class (Model)
  - init : class 생성시 초기화 함수 (구현)
  - randomComputerInputNumbers : 3자리 난수 뽑는 함수, _computerInputNumbers setter (구현)
  - getComputerInputNumbers : _computerInputNumbers getter (구현)
  - countStrikeBall : 컴퓨터 입력 값, 사용자의 입력 값을 받아 일치 여부 판단하여 스트라이크 개수, 볼 개수 객체로 반환(구현)
  - play : 컴퓨터 입력 값, 사용자의 입력 값을 받아 스트라이크, 볼, 낫싱, 정답 관련 String 반환(구현)
  
- BaseballGameView class (View)
   - init : 생성자로 만든 userInputSubmitButton에 handleUserInputSubmit를 바인딩하여 이벤트 리스너 연결 (구현)
   - renderResult : 게임 결과를 나타내는 DOM 생성, 렌더 (구현)
   - cleanResult : 게임 결과를 나타내는 DOM 소거 (구현)
   - resetInputNumbers : user input 입력 칸 초기화 (구현)
   - validUserInputNumbers : exception handling function들로 user input이 정상적인 입력인지 검증(구현)
   - handleUserInputSubmit : 입력한 숫자 제출 이벤트 핸들링 (구현)
   - handleReStartClick : 재시작 버튼 클릭 이벤트 핸들링 (구현)
   
- userinput exception handling function
   - isNumber : user input이 1~9까지의 숫자로 이루어져 있는가 판별 (구현)
   - isNot3Digit : user input이 3자리 숫자가 아닌지 판별 (구현)
   - isInZero : user input에 0이 포함되어 있는지 판별 (구현)
   - isInduplicateDigit : user input에 중복된 숫자들이 섞여있는지 판별 (구현)
   
## 이슈 및 느낀 점

- Browser CORS 에러
  - 모듈시스템을 활용하고 싶었다. 그러나, local의 자원을 받아오는데도, CORS 에러가 생겨 자원을 불러오지 못했다.
  - type을 module로 설정한 <script> 태그가 포함된 HTML 파일을 로컬에서 로드할 경우 자바스크립트 모듈 보안 요구사항에 따라 CORS 오류가 발생한다.
  - 처음엔, http-server를 설치해 서버를 만들고 그 위에 올려서 해결했으나, 깔끔하게 느껴지지 않았다.
  - 결국, js 번들러 webpack 설치 후 bundle.js를 만든 후 사용하여 해결하였다.
  
- 숫자야구 내부 기능과 DOM 관련 기능 간 강한 의존성(강결합)
  - 짜다 보니, 처음엔 BaseballGame 클래스에 숫자 야구 내부 기능과 DOM을 관련 기능들이 섞여 있었다.
  - 가독성이 떨어졌고 기능 간 강한 의존성이 발생해 난잡하게 느껴졌다.
  - 일단 내부 기능, DOM 조작 기능별로 함수를 만들어 나누었다. 그런데도 많은 기능, 책임을 져 비대한 함수를 다시 최대한 나누었다.(모듈화)
  - 그리고 class를 나누어 BaseballGame 클래스(Model 역할)에 숫자 야구 내부 기능 함수, BaseballGameView 클래스(View 역할)에 DOM 관련 기능 함수를 두었다.
  - 가독성을 확보하고 의존성을 제거할 수 있었다.
  
- export default의 존재 이유
  - 프로그래밍 요구사항에선, 예시로 주어진 src/index.js에 있는 클래스와 함수에 export default가 붙어있었다.
  - 모듈시스템을 활용하라는 뜻, 나중에 채점할 때 test를 돌리기 위해서가 아닐까 추측을 해보았다.
  - 그러나 프로그래밍 요구사항을 1차 적으로 충족시키는 것이 중요하기에, BaseballGame 클래스는 src/index.js에 두고 나머지 클래스와 유틸 등은 import 해서
    쓰는 것으로 절충하였다.

- 함수와 클래스 모듈화의 어려움
  - 혼자 코딩할 땐 함수 모듈화를 잘 의식하지 못했다.
  - 그러다 과제를 수행하며 관심사 분리, 단일책임 원칙 등 개발 원칙을 신경 쓰게 되었는데, 이를 의식하며 함수와 클래스를 잘 나누기 몹시 어려웠다.
  - 그러나 관심사, 책임별로 잘 나누어 정리된 코드가 훨씬 좋다는 것을 깨달았다.
  - 자연스럽게 의존성이 제거되고, 현재의 가독성, 미래의 유지보수성과 확장성을 좋게 만들기 때문이다.
  
- 코딩 컨벤션 적용, 읽기 좋은 코드를 만드는 것의 어려움
  - 혼자 코딩할 땐 남이 읽기 좋은 코드를 만들기 쉽지 않았다.
  - 제공된 코딩 컨벤션 가이드이 얼른 이해 가지 않아 여러 번 읽어가며 코딩 컨벤션을 적용했고 가독성이 높아졌다.
  - 그런데도 여전히 안 읽히는 코드가 있었다. 짠다고 짰고 잘 작동하지만 다른 사람이 읽기 어려운 코드들이었다. 코딩 컨벤션이 다루지 않은 부분도 있었다.
  - 내 코드를 주변 지인에게 계속 읽히고 피드백에 따라 리팩토링하였다. 내가 생각지 못한 개선점을 객관적인 관점에서 찾을 수 있었다. 
  - 나만 아는 코드를 남들도 알 수 있는 코드로 만들 수 있었고 코드의 가독성이 더욱 좋아졌다. 

