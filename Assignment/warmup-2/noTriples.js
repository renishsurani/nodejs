function noTriples(nums){
  if(nums.length < 3)
    return true;
  else
     for(var i=0;i<nums.length-2;i++){
        if(nums[i]==nums[i+1] && nums[i]==nums[i+2])
          return false;
     }
     return true;

}