//유저의 입력 유효성 판단
export default function validateUser(validatenum){  
  let valid=''
  let setvalid=new Set(validatenum);
  if(validatenum.length!=setvalid.size){
    valid='중복없이 입력하세요';
  }
  validatenum.forEach(num=>{
    if(isNaN(num)){
      valid='숫자를 입력하세요';
    }

  }
  )
  if (validatenum.length>3){
    valid='범위에 알맞게 입력하세요';
  } 
  return valid;
  };