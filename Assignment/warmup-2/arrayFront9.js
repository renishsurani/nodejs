function arrayFront9(nums){
  var n=0;
  while(n < nums.length && n < 4){
    if(9 == nums[n])
      return true;
    n++;
  }
  return false;
}