import { $ } from "../dom/dom.js";
import checkValidNum from "./checkValidNum.js";

export default function getUserNumbers (userNum){
    if(!checkValidNum(userNum)){
        alert("잘못된 값을 입력하셨습니다 다시 값을 입력해주세요");
        $('#user-input').value = "";
        $('#result').innerText = "";
        return false;
    }
    return userNum.split("");
}