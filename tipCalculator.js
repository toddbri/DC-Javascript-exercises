function tipAmount(bill,level){
  if (level==="good"){
    return bill*0.2;
  } else if (level==="fair"){
    return bill*0.15;
  }
  else {return bill*0.1;}
}

console.log(tipAmount(100,'good'));

console.log(tipAmount(40,'fair'));
