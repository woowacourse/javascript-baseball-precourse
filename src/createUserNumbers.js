export function createUserNumbers(){
    let user_input = document.getElementById('user-input').value;
    let set = new Set([... user_input]);
    let user_nums = [... set];

    if ((user_nums.length == 3 && user_nums.filter(e => '0' == e).length < 1)){
        return user_nums.join('');
    }
    else{
        alert("입력을 다시 해주세요.");
        location.reload();
    }
}