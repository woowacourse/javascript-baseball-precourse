
//console.log(pickThreeDigitRandomNumber());
pickThreeDigitRandomNumber();

function isSetLengthUnderThree(setA){
    if (setA.size < 3){
        return true;
    }
    return false;
}

function pickThreeDigitRandomNumber(){
    const setA = new Set;
    while(isSetLengthUnderThree(setA)){
        setA.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    console.log(setA);
}