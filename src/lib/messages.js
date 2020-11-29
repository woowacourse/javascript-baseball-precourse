export const correctAnswerMessage = "🎉정답을 맞추셨습니다!🎉";
export const getWrongAnswerMessage = ({
    strike, 
    ball
}) => (!strike && !ball) ? '낫싱' : ((ball ? `${ball}볼 ` : '') + (strike ? `${strike}스트라이크` : ''));