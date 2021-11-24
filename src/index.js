export default function BaseballGame() {

    const setAnswer = () => {
        let computerInputNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
        return computerInputNumbers;
    }

    console.log(setAnswer());
}

BaseballGame();
