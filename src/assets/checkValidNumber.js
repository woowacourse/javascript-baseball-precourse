//조건에 맞는 숫자인지 체크하는 함수
export const checkValidNumber = inputs => {
    if(/[^1-9]+/g.test(inputs)) return {ok: false, msg: '1-9의 각 다른 숫자 3개를 공백 없이 입력하세요'};
    if(inputs.length !== 3) return {ok: false, msg: '숫자는 3개만 입력가능합니다.'};
    
    if(inputs.charAt(0) === inputs.charAt(1) || inputs.charAt(0) === inputs.charAt(2) || inputs.charAt(1) === inputs.charAt(2)) return {ok: false, msg: '같은 숫자는 여러번 올 수 없습니다.'};
    
    return {ok: true, msg: '올바른 입력입니다!'};
}