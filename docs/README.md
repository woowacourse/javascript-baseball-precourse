# 숫자 야구 게임
> 바닐라 자바스크립트로 구현하는 숫자 야구 게임!

<br>

## 1️⃣ 사용한 라이브러리와 버전
### 🗃 랜덤 라이브러리
- `@woowacourse/mission-utils`: 1.0.1

<br>

### 🗃 Linter 관련
- `eslint`: 8.3.0
- `eslint-config-airbnb`: 19.0.1
- `eslint-config-prettier`: 8.3.0
- `eslint-plugin-cypress`: 2.12.1
- `eslint-plugin-import`: 2.25.3
- `eslint-plugin-jsx-a11y`: 6.5.1
- `eslint-plugin-prettier`: 4.0.0
- `prettier`: 2.4.1

<br>

## 2️⃣ 기능 구현 단계 정의
> 주어진 [**기능 요구사항**](https://github.com/InSeong-So/javascript-baseball-precourse#-%EA%B8%B0%EB%8A%A5-%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD)을 따라 작성합니다.

<br>

우선 기능 요구사항을 분리하여 구조화 했습니다.
1. 입력 이벤트
2. 확인 이벤트
3. 랜덤 입력되는 데이터
4. 게임을 실행하는 메서드
5. 결과를 렌더링하는 내용

<br>

이렇게 보니 하나의 컴포넌트로 처리하면 각 기능을 메서드로 분리할 수 있을 것 같습니다! 우선 각 기능을 구현한 뒤 클래스형 컴포넌트로 합치는 형태를 취하기로 했습니다.

<br>

### 🛠 환경 설정
> 일관성 있는 코드를 위해 ESLint, Prettier를 설정하고 Airbnb 스타일을 적용한 뒤 추가적인 규칙을 정의합니다.

**사전 정의**
- [x] ~~1. 의존성 라이브러리를 설치하고 Linter를 설정합니다.~~/ 완료

<br>

> [완료 커밋 링크](https://github.com/InSeong-So/javascript-baseball-precourse/commit/ce29522d79a9be3d1acd227ccb72ff2774853939)

<br>

### 🛠 입력 이벤트
> 키보드의 입력 이벤트가 발생되는 시점에 처리할 기능을 구현합니다.

**사전 정의**
- [x] ~~1. input `user-input`의 입력 이벤트에 따른 동작을 설정합니다.~~
- [x] ~~2. [keypress 이벤트는 deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/keypress_event) 되었으므로 keydown 이벤트로 처리합니다.~~

**변경 사항**
- input 이벤트는 필요가 없었으므로 최대한 버튼 클릭 이벤트에서 처리하도록 변경하였습니다.
- MaxLength 속성을 추가로 기입합니다. 테스트 코드를 확인하니 최대 4자리가 입력되어 MaxLength를 `정해진 길이 * 2 까지만` 허용했습니다.

<br>

### 🛠 확인 이벤트
> 확인 버튼이 클릭되는 시점에 처리할 기능을 구현합니다.

**사전 정의**
- [x] ~~1. button `submit`의 클릭 이벤트에 따른 동작을 설정합니다.~~/ 완료
- [x] ~~2. 옳지 못한 값(3자리 숫자를 제외한 다른 타입과 문자)에 대한 예외를 처리합니다.~~/ 완료
- [x] ~~3. 2번의 확장입니다. 입력 받는 데이터는 text 형태이므로 문자를 숫자로 치환합니다.~~/ 취소
- [x] ~~4. 입력된 3자리 숫자가 중복 되었는지 확인합니다.~~/ 완료
- [x] ~~5. 구현한 기능을 리팩토링합니다.~~/ 완료

**추가 사항**
- [x] ~~버튼 클릭시 기존 이벤트(submit)를 취소합니다.~~/ 완료
- [x] ~~공백이거나 정해진 자리수가 아니라면 예외 처리합니다.~~/ 완료
- [x] ~~예외가 발생하면 input #user-input을 비웁니다.~~/ 완료
- [x] ~~버튼 이벤트가 종료되면 input #user-input에 포커싱합니다.~~/ 완료
- [x] ~~0은 허용되지 않으므로 예외 처리합니다.~~/ 완료

**변경 사항**
- 3번 항목은 문자열로 비교하므로 구현하지 않습니다.

<br>

> 기본
> - [커밋 링크 1](https://github.com/InSeong-So/javascript-baseball-precourse/commit/d8dcdf008bea15dc1c8568216be7c20b3b4b2741)

<br>

> 리팩토링 및 추가사항
>- [커밋 링크 2](https://github.com/InSeong-So/javascript-baseball-precourse/commit/9c06232476a00b8f3cdb84bc6ec9b16be3bfd013)
>- [커밋 링크 3](https://github.com/InSeong-So/javascript-baseball-precourse/commit/24914a9c5dac25bf1fdc0cb638e887f8bf85c080)
>- [커밋 링크 4](https://github.com/InSeong-So/javascript-baseball-precourse/commit/4ded3a7176f7cbf620e897424b9f60894b666bb1)

<br>

### 🛠 랜덤 입력되는 데이터
> 컴퓨터의 랜덤 값을 설정하는 컴포넌트를 작성합니다.

**사전 정의**
- [x] ~~1. MissionUtils 라이브러리를 의존하는 컴포넌트를 작성합니다.~~/ 완료
- [x] ~~2. 인자로 자리수를 입력 받아 컴퓨터 랜덤 값을 설정합니다.~~/ 완료

**추가 사항**
- [x] ~~중복되지 않는 랜덤 값을 인자로 받은 자리수까지 이어 타겟 넘버를 생성합니다.~~/ 완료
- [x] ~~MissionUtils.Random.pickNumberInRange 함수의 인자를 설정할 수 있게 수정합니다.~~/ 완료
- [x] ~~생성자 함수의 파라미터로 자리수, 시작 숫자, 종료 숫자를 받을 수 있게 작성합니다.~~/ 완료
- [x] ~~입력받은 상태 값을 검증하는 함수를 작성합니다.~~/ 완료
- [x] ~~조건에 맞게 상수 값을 리팩토링 합니다.~~/ 완료

<br>

> 기본
> - [커밋 링크](https://github.com/InSeong-So/javascript-baseball-precourse/commit/19a617fc61da0c51219c3d8a2561ddf0f5fd882b)

<br>

> 리팩토링 및 추가사항
> - [상수 변경 링크](https://github.com/InSeong-So/javascript-baseball-precourse/commit/a5e71626b0bb3e46f2faa7f4e5573420b24287ef)

<br>

### 🛠 게임을 실행하는 메서드
> play 메서드를 통해 게임을 실행하고 결과를 확인합니다.

**사전 정의**
- [ ] 1. 입력 값과 비교하여 결과(스트라이크와 볼, 낫싱)를 체크합니다.
- [ ] 2. 구현한 기능을 리팩토링합니다.

**추가 사항**
- [ ] 볼은 다른 자리에 동일한 값을 체크합니다.
- [ ] 스트라이크는 동일한 자리에 동일한 값을 체크합니다.
- [ ] 공백 문자열도 상수 처리합니다.

**변경 사항**
- input #user-input의 값이 예외 처리되면 게임이 시작되지 않아야 하므로 조건문을 통해 return 처리합니다.

<br>

> 기본
> - [커밋 링크]()

<br>

### 🛠 결과를 렌더링하는 내용
> play 메서드로 반환된 결과를 DOM에 그려 화면에 출력합니다.

**사전 정의**
- [ ] 1. 게임 결과에 따라 div #result의 텍스트를 갱신시킵니다. innerHTML을 사용해 처리합니다.
- [ ] 2. 승리할 경우 재시작 버튼을 클릭하여 게임이 리셋될 수 있어야 하므로 타겟 dom에 대한 정보를 컴포넌트가 인지하고 있어야 합니다. 따라서 컴포넌트의 파라미터를 수정합니다.
- [ ] 3. 맞춘 횟수가 야구게임의 숫자 자리수와 같으면 승리입니다.
- [ ] 4. 스트라이크와 볼을 더한 수치가 0이라면 아무것도 맞추지 못햇으므로 낫싱입니다.
- [ ] 5. 그 외라면 볼과 스트라이크를 차례대로 출력합니다. 단, 1이상인 값만 출력합니다.

**추가 사항**
- [ ] 재시작의 경우 이벤트 위임을 통해 단 1회만 이벤트를 등록하도록 기능을 구현합니다.

<br>

> 기본
> - [커밋 링크]()

<br>