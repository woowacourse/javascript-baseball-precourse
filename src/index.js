export default function BaseballGame() {

    /* pickThreeDigitRandomNumber(); */
    function isSetLengthUnderThree(setA){
        if (setA.size < 3){
            return true;
        }
        return false;
    }

    function convertSetToString(setA){
        let strArray = [];
        for(let i of setA){
            strArray.push(i);
        }
        return(strArray.join(""));
    }

    function getThreeDigitRandomNumber(){
        const setA = new Set;
        while(isSetLengthUnderThree(setA)){
            setA.add(MissionUtils.Random.pickNumberInRange(1,9));
        }
        return convertSetToString(setA);
    }

    const computerInputNumbers = getThreeDigitRandomNumber();
    console.log(computerInputNumbers);

    /*get user number*/
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submitButtonOn);

    //TODO Check User Num Is Valid
    function submitButtonOn(){
        let usernumber = getUserNum();
    }

    function getUserNum(){
        let userInput = document.getElementById('user-input').value;
        return userInput;
    }

}

new BaseballGame();