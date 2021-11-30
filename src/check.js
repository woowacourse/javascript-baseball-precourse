export function showError(message){
    alert(message);
}

export function checkRepeat(input){
    const inputArr=input.split('').map(Number);
    const inputSet=new Set(input);
    if(inputArr.length!==inputSet.size) return true;
}

export function checkinputValid(input){
    if(isNaN(input)||input.length!==3||checkRepeat(input)){
      return false;
    }
    return true;
}