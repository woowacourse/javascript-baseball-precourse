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
    else if (new Set(userNums).size !== 3) isPass = false;
    else if (userNums.includes(0)) isPass = false;
    else if (userNums.some(isNaN)) isPass = false;

    return isPass;
}
