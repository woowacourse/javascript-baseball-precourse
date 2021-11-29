<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-baseball-precourse/blob/main/images/baseball_icon.png?raw=true"/>
</p>
<h1 align="middle">숫자 야구 게임</h1>

## ✔️ 기능 설계 (ire4564)

미션을 진행하기에 앞서 코딩컨벤션에 대해 정리하였다. (정리 글: https://irelifesheet.notion.site/95f64b2ce3ae428e9eee8de12f3f845b) <br/>

코딩컨벤션은 <NHN FE 개발랩>의 코딩컨벤션을 선택하여 따랐다. <br/>

필요한 기능은 아래와 같다. <br/>

최대한 함수를 자잘하게 나누려고 노력하였으며, 함수 단위로 기능을 작성한 결과 아래와 같은 기능이 나왔다. <br/>

기능은 각각 커밋 시에 알아보기 쉽도록 각각의 번호를 붙였다.<br/>



<br/>

<b>index.js</b>

- [ ] String Result 생성 (002) - `createResult`

- [ ] Set Result in DOM (003) -`setResult`

<b>compare.js</b>

- [X] Strike 개수 세기 (004) - `countStrike`

- [ ] Ball 개수 세기 (005) - `countBall`

- [ ] 낫싱인지 판단 (006) - `isNothing`

- [ ] 모두 정답인지 판단 (007) - `isCorrectAll`

<b>restart.js</b>

- [X] Button을 보이기 (008) - `setButton`

- [X] Button을 숨기기 (009) - `clearButton`

- [X] Random 값 생성 (001) - `createAnswer`

<b>validation.js</b>

- [X] input을 모든 조건에 맞도록 check - `checkInput` 

- [X] input 값이 비어있지 않은지 (011) - `isNotnull`

- [X] 3자리 수가 맞는지 (012) - `isThreeNum`

- [X] 서로 다른 수인지 (013) - `isAnother`

- [X]  숫자인지 검사 (014) - `isNumber`

- [X]  0이 포함되었는지 범위 검사 (015) - `isZero`

