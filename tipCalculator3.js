
function splitAmount(bill,level,split){
  if (level==="good"){
    return (bill*1.2/split);
  } else if (level==="fair"){
    return (bill*1.15/split);
  } else {
    return (bill*1.1/split);}
}
console.log(splitAmount(100,'good',5));

console.log(splitAmount(40,'fair',2));
