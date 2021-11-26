//play 메서드로 부터 받아온 값에 따라서 결과 값을 반환한다 

export default function getResultString(ballCount, strikeCount){
    if(ballCount === 0 && strikeCount === 0){
        return "낫싱"
    }
    if(ballCount !== 0 && strikeCount !== 0){
        return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
    if(ballCount !== 0 && strikeCount === 0){
        return `${ballCount}볼`;
    }
    if(strikeCount === 3){
        return 'gameEnd';
    }
    return `${strikeCount}스트라이크`;
}