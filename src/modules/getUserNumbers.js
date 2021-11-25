import { $ } from "../dom/dom.js";
import checkValidNum from "./checkValidNum.js";

//user가 입력한 값이 유효한 값인지 확인 후 user가 입력한 값을 반환한다
export default function getUserNumbers (userNum){
    if(!checkValidNum(userNum)){
        alert("잘못된 값을 입력하셨습니다 다시 값을 입력해주세요");
        $('#user-input').value = "";
        return;
    }
    return userNum.split("");
}