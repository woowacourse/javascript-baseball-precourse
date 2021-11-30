export function userInput() {
    const $user = document.querySelector("#user-input");
    const userNums = $user.value;

    return userNums;
}

export function clearUserInput() {
    const $user = document.querySelector("#user-input");
    $user.value = "";
}

export function checkUserNums(userNums) {
    let isPass = true;
    userNums = userInput()
        .split("")
        .map((element) => Number(element));

    if (userNums.length !== 3) isPass = false;
    userNums.forEach((element, index) => {
        isPass = checkRepe(userNums, element, index, isPass);
    });
    if (userNums.includes(0)) isPass = false;
    if (userNums.some(isNaN)) isPass = false;

    return isPass;
}
