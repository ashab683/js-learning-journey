const nums1 = [1,2,3,4]

function add(a,b,...nums) {
    console.log('nums:',nums);
      console.log(a,b);
    let sum = 0
    for(let i = 0; i<nums.length;i++){
        sum = sum + nums[i]
    }
    return sum 
}
function add(...nums){
  return nums.reduce((acc,curr)=> acc + curr)
}

const result = add(...nums1)