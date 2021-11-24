## 📋 구현할 기능 목록
1. 컴퓨터의 랜덤 값 생성
  
    1. 1~9 사이의 서로다른 숫자를 세자리 생성
    
2. 유저가 숫자를 입력한다
    1. 숫자만 입력했는지 확인 
    2. 공백 입력했는지 확인
    3. 1~9의 숫자를 입력했는지 확인
    4. 중복 된 숫자가 있는지 확인
    5. 잘못된 값을 입력한 경우 `alert`으로 에러 메시지를 보여주고, 다시 입력
    
3. 볼과 스트라이크로 이루어진 점수판 생성

4. 유저 숫자와 컴퓨터 숫자 비교
    1. 유저의 숫자를 하나씩 보면서  컴퓨터 숫자와 같은 숫자가 있는지 확인
        1. `true` : 인덱스도 일치하는지 확인
            1. `true` : 점수판 스트라이크의 count++
            2. `false` : 점수판 볼의 count++
        2. `false` : 유저 숫자의 다음 번호를 확인
    
5. 점수판의 숫자를 통해 결과를 보여준다
    1. 볼과 스트라이크가 모두 0이면 ⇒ `낫싱` 출력
    2. 볼이 1이상이고 스트라이크가 0이면 ⇒ `n볼` 출력
    3. 볼이 0이고 스트라이크가 1이상이면 ⇒ `n스트라이크` 출력
    4. 볼이 1이상이고 스트라이크가 1이상이면 ⇒ `n볼 m스트라이크` 출력
      
        ⇒ ❗️ i, ii, iii, iv 는 '2. 유저가 숫자를 입력한다'으로 이동
        
    5. 스트라이크가 3이면 ⇒ `🎉 정답을 맞추셨습니다! 🎉` 출력
    
6. `게임 재시작` 버튼 생성 및 출력
  
    1. 버튼 클릭시 '1. 컴퓨터의 랜덤 값 생성'으로 이동
    

<br>

## ✅ 프로그래밍 요구사항
### DOM 선택자
각 요소에 아래와 같은 선택자를 반드시 지정한다.

- 게임을 다시 시작하는 재시작 button 태그는 `game-restart-button` id를 가진다.
  - 예) `<button id="game-restart-button">재시작</button>`

### 라이브러리
- 컴퓨터의 랜덤 값은 반드시 JavaScript의 `Math.Random` 대신 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다. (`MissionUtils`은 window객체 내에 포함되어 있음)

### 공통 요구사항

- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
  - [JavaScript Standard Style](https://standardjs.com)
  - [NHN FE개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.

<br>