function tipAmount(bill,level){
  if (level==="good"){
    return bill*0.2;
  } else if (level==="fair"){
    return bill*0.15;
  }
  else {return bill*0.1;}
}
function totalAmount(bill,level){
  if (level==="good"){
    return bill*1.2;
  } else if (level==="fair"){
    return bill*1.15;
  }
  else {return bill*1.1;}
}
console.log(totalAmount(100,'good'));

console.log(totalAmount(40,'fair'));
