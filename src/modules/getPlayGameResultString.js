export default function getPlayGameResultString(ballCount, strikeCount){
    if(ballCount === 0 && strikeCount === 0){
        return "낫싱"
    }
    if(ballCount !== 0 && strikeCount === 0){
        return `${ballCount}볼`;
    }
    if(strikeCount === 3){
        return 'gameEnd';
    }
    if(ballCount === 0 && strikeCount !== 0){
        return `${strikeCount}스트라이크`;
    }
    return `${ballCount}볼 ${strikeCount}스트라이크`;
}