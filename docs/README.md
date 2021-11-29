# 기능 요구사항

### 1. 필요한 유틸 함수를 작성한다. (아래 5개의 함수를 완성한다)

    🖊 입력된 숫자에 0이 포함되었는가 ?
    🖊 입력된 숫자에 중복이 발생하였는가 ?
    🖊 입력된 숫자가 세 자리 수인가 ?
    🖊 입력된 것이 숫자인가?
    🖊 위 4개의 조건을 모두 만족하는지 아닌지를 점검하는 함수

### 2. 베이스 볼 게임의 로직을 구현한다. (비교 대상은 문자열, 서로의 문자가 같은지 - 인덱스가 같은지를 점검)

    🖊 같은 수가 같은 자리 : STRIKE
    🖊 같은 수가 다른 자리 : BALL
    🖊 포함되지 않는다 : NOTHING

### 3. BaseballGame 클래스의 생성자 함수를 완성한다.

    🖊 객체가 생성될 때 처음 해주어야 하는 작업들을 수행하는 함수를 완성한다.

### 4. BaseballGame 클래스에서 사용되는 이벤트 핸들러 함수를 작성한다

    🖊 Submit 이벤트를 핸들링하는 함수를 개발한다.
    🖊 Restart 버튼 UI의 Click 이벤트를 핸들링하는 함수를 개발한다.

### 5. BaseballGame 클래스를 완성한다.

    🖊 play 함수를 개발한다.
    🖊 restart 할 때 game을 clearing 해주는 함수를 개발한다.

# TIL - 고민사항

### 0. 유틸 함수는 함수 이름만 보고도 어떤 정보를 반환하는지 알 수 있도록 구현

아래 함수들 처럼 조건식으로 표현하는 것보다 함수 이름으로 어떤 조건 식을 검사하는지 알 수 있도록 구현해보았습니다. 조건식으로만 표현하여 단번에 이해하기 어려웠던 함수의 내용을 보다 쉽게 파악할 수 있게 되었습니다.

- `checkNumeric` : 문자열이 숫자로 변환될 수 있는 문자열인지를 점검합니다.
- `checkThreeNums` : 문자열의 길이가 3인지를 점검합니다.
- `checkNotDuplicate` : 문자열에 중복된 문자가 포함되었는지를 점검합니다.
  ...

또 `!` 연산자의 사용은 함수의 의미를 한번 더 생각하게 한다고 판단하여 다음과 같이 리팩토링 해보았습니다.

```jsx
hasZero(str){
  ...
}

checkExcludeZero(str){
  ...
}
```

is - has는 boolean 변수에 사용되는 네이밍 방식이라는 것을 새롭게 알게되어 다음과 같이 리팩토링 해보았습니다. (https://www.30secondsofcode.org/articles/s/javascript-naming-conventions) (절대적인 규칙이라고 생각하는 것은 아닙니다)

```jsx
isNumeric(str){
  ...
}

//변경 후
checkNumeric(str){
  ...
}
```

### 1. 처음 명세를 보았을 때 play 함수 인자로 `computerInputNumbers`가 있는 것을 보고 의아했다.

    - 클래스를 통해 객체를 생성할 때 컴퓨터의 입력 값을 계산하고 멤버로 가지고 있게 하고싶은데, 인자가 항상 있어서 어떠한 의도가 있는 것인가? 조금 오래 생각함

### 2. 상수화

    - 처음에 상수화를 하지 않고 진행하였는데, 오타로 인한 오류가 발생하였다. (빠른 개발을 위해 상수화를 뒤로 미루고 일단 개발을 시작하였는데, 역시나 오타로 인한 오류가 발생...)

#### 상수화 - 변경 전

```javascript
for (let i = 0; i < com.length; i++) {
  const res = computeResultByNum(com, user[i], i);
  if (res !== "noting") {
    // res 가 'nothing' 이면 이 블록은 수행되지 않는다. -> 오타로 인한 오류가 발생

    result[res]++;
  }
}
```

#### 상수화 - 변경 후

```javascript
// lib/constants.js
export const TYPE = {
  NOTHING: "nothing",
  STRIKE: "strike",
  BALL: "ball",
};
...
```

```javascript
// lib/logic.js
...
 for (let i = 0; i < com.length; i++) {
    const res = computeResultByNum(com, user[i], i);
    if (res !== TYPE.NOTHING) {
      result[res]++;
    }
  }
...
```

### 3. 베이스볼 게임의 로직을 수행하는 함수들을 상속 관계의 클래스로 분리

- 클래스로 객체를 생성할 때 마다 인스턴스의 메서드로 로직을 수행하는 함수를 가질 필요가 있나? 를 고민하게 되었다.
- 본인이 생각하기에 베이스볼 게임 객체마다 메소드로 로직 함수(입력 값에 따라화면에 렌더링 할 텍스트를 리턴하는)를 가질 필요가 없다고 생각함

1. `static` 키워드를 활용하여 클래스 함수 자체에 메서드를 갖게 하였습니다.

2. `extends` 키워드를 활용하여 렌더링을 담당하는 `BaseballGame` 클래스와 오롯이 결과 문자열만을 계산하는 `static` 메서드를 담은 `BaseballGameLogic` 클래스를 분리, 상속 관계를 갖도록 구현하였습니다.
