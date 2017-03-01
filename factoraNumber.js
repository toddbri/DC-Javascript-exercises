function factors(num){
  var arr_factors =[];
  arr_factors.push(1);
  arr_factors.push(num);
  for (var i =2;i<Math.sqrt(num)+1;i++){
    if (num%i === 0){

      if (arr_factors.lastIndexOf(i) === -1){
        arr_factors.push(i);
        arr_factors.push(num/i);
      }
      if (i>arr_factors[arr_factors.length]-1){
        i=num;
      }
    }
  }
  return arr_factors;
}

console.log(factors(1020));
