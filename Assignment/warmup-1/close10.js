function close10(a, b){
  if(Math.abs(a - 10)==Math.abs(b - 10))
    return 0;
  else if(Math.abs(a - 10) > Math.abs(b - 10))
    return b;
  else 
    return a;
}