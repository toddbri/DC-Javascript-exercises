function sumNumbers(arr_nums){
  sum =0;
  for (var i =0;i<arr_nums.length;i++){
    sum +=arr_nums[i];

  }
return sum;
}

function myFunc(item,index) {
  sum +=item;
}

function sumNumbers2(arr_nums){
  sum =0;
  arr_nums.forEach(myFunc);
  return sum;
}

function sumNumbers3(arr_nums){
  sum =0;
  arr_nums.forEach(function(item,index){sum+=item;});
  return sum;
}
console.log(sumNumbers([1,4,8]));
console.log(sumNumbers([1,4,8,56,7,8,8]));
console.log(sumNumbers2([1,4,8]));
console.log(sumNumbers2([1,4,8,56,7,8,8]));
console.log(sumNumbers3([1,4,8]));
console.log(sumNumbers3([1,4,8,56,7,8,8]));
