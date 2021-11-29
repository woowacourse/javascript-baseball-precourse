//유저의 입력 유효성 판단
export default function validateUser(validateNum){  
  let valid=''
  let setValid=new Set(validateNum);
  if(validateNum.length!=setValid.size){valid='중복없이 입력하세요';}
  validateNum.forEach(num=>{
    if(isNaN(num)){valid='숫자를 입력하세요';}
  }
  )
  if (validateNum.length>3){valid='범위에 알맞게 입력하세요';} 
  return valid;
  };