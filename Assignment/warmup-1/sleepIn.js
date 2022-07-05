function sleepIn(weekday, vacation){
  if(weekday==true && vacation==true || weekday==false && vacation==true || weekday==false && vacation==false)
    return true;
  else
    return false;
}