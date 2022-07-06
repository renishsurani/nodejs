function array123(nums){
  for(var i=0; i<nums.length;i++){
    if(1==nums[i] && 1==nums[i+1] && 1==nums[i+2])
      return true;
    else
      return false;
  }
}