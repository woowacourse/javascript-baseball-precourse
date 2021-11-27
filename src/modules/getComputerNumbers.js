export default function getComputerNumbers(){
    let checkComputerNumbers = [];
    while (checkComputerNumbers.length !== 3){
        if(checkComputerNumbers.length === 3){
            break
        }
        let num = MissionUtils.Random.pickNumberInRange(1,9);
        if (!checkComputerNumbers.includes(num)){
            checkComputerNumbers.push(num);
        }
    }
    
    return checkComputerNumbers;
}