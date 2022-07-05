function lastDigit(a, b, c){
  if(a == b%10)
    return true;
  else if(b == a%10)
    return true;
  else
    return false;
}