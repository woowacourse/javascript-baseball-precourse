# 📋 구현할 기능 목록
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

# 🤔 고민했던 부분

### 1~9 사이의 서로 다른 숫자 세자리를 공백 없이 입력했는지 확인

> 처음에는 숫자만 입력했는지, 공백 입력했는지, 1~9의 숫자를 입력했는지 확인을 하는 함수를 사용하려고 했었다. 위의 절차를 알아보던 중 '정규식'을 알게 되어서 학습 후 user-input 검사에 적용하였다.

```jsx
//constants.js
export const THREE_UNIQUE_NUMBERS_REGEX = /^[1-9]{3}$/;
```

<hr>

### **DOM 조작 함수들 DOMUtils로 추출**

> 개발을 진행 할 수 록 DOM을 조작하는 함수들이 점점 많아졌고, 기능을 수행하는 다른 코드들과 분리하면 좋겠다는 생각이 들었다. 자주 사용하는 함수들 위주로 추출 후 라이브러리 형식으로 사용하게 되었다.

<hr>

### `constants.js` 최적화를 어떻게 하지

```javascript
//처음의 방식은 하나씩 export 해서 쓰기
export const DIGIT_NUMBER = 3;
export const START_NUMBER = 1;
export const END_NUMBER = 9;

//최적화 방식은 객체로 변환하기
export const NUMBER = {
  DIGIT: 3,
  START: 1,
  END: 9,
};

//나머지 객체들도 큰 범주가 눈에 띄이면 객체로 변환해주었다
//POINT(게임 점수), ANSWER(게임 결과를 보여주는 문장)
```

```javascript
// 매개변수가 있는 상수는 사용 불가 (ReferenceError: scoreBoard is not defined)
export const ANSWER = {
  RIGHT: '🎉 정답을 맞추셨습니다! 🎉',
  NOTHING: '낫싱',
  N_BALL_N_STRIKE: `${scoreBoard.ball}볼 ${scoreBoard.strike}스트라이크`,
  N_BALL: `${scoreBoard.ball}볼`,
  N_STRIKE:`${scoreBoard.strike}스트라이크`
};

//마땅한 방법을 찾지 못해서 매개변수(scoreBoard)가 들어간 부분은 삭제하였다.
```

<br>

# 🐛 버그 발견

### 게임 종료시에도 계속 user-input과 submit 버튼 활성화

> 게임이 종료되어도 게임을 진행할 수 있는 경우의 수를 물리적으로 차단했다.

```jsx
//DOMUTI

//게임이 종료되면 user-input과 submit 버튼을 비활성화 처리하였다
disableElement: (selectors) =>
    (DOMUtils.getElement(selectors).disabled = true),

//게임 재시작시 user-input과 submit 버튼을 다시 활성화 처리하였다
ableElement: (selectors) => 
		(DOMUtils.getElement(selectors).disabled = false),
```

<br>

# ✅ 프로그래밍 요구사항

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
