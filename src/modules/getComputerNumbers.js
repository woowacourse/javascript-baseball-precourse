export default function getComputerNumbers(){
    let computerInputNumbersArry = [];
    while (computerInputNumbersArry.length !== 3){
        if(computerInputNumbersArry.length === 3){
            break
        }
        let num = MissionUtils.Random.pickNumberInRange(1,9);
        if (!computerInputNumbersArry.includes(num)){
            computerInputNumbersArry.push(num);
        }
    }
    
    return computerInputNumbersArry;
}