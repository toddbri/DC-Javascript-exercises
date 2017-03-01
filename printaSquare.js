function printSquare(num){
  str="";
  for(var i =1;i<=num;i++){
    str+="*";
  }
  for(i =1;i<=num;i++){
    console.log(str);
  }
}

printSquare(5);
printSquare(20);
