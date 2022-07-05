function stringE(str){
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'e') {
    cnt += 1;
    }
  }
  if(cnt > 0 && cnt <4)
    return true;
  else
    return false;
}