function makeComputerNum(){
    let tmp_num = MissionUtils.Random.pickNumberInRange(1, 9);
    let set = new Set([tmp_num]);

    while(set.size < 3){
        tmp_num = MissionUtils.Random.pickNumberInRange(1, 9);
        set.add(tmp_num);
    }
    const computer_nums = [... set]
    return computer_nums.join('');
}


export default makeComputerNum;