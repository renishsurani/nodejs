function arrayCount9(nums){
  var count =0;
  for(var i=0; i<nums.length;i++){
    if(nums[i]==9)
      count++;
  }
  return count;
}