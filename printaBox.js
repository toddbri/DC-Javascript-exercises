function Stars(x){
  str ="";
  for (var y=1;y<=x;y++){
    str +="*";
  }
  return str;
}
function Spaces(x){
  str="";
  for (var y=1;y<=x;y++){
    str +=" ";
  }
  return str;
}

function printBox(w,h){
  console.log(Stars(w));

  if (h===2){
      console.log(Stars(w));
  } else {
      for (i=1;i<h-1;i++){
        if (w>1){
          console.log("*" + Spaces(w-2) + "*");
        } else {
          console.log("*");

        }
      }
      if (h>2){
      console.log(Stars(w));
      }
  }

}

printBox(1,1);
console.log("---------");
printBox(1,5);
console.log("---------");
printBox(5,1);
console.log("---------");
printBox(2,2);
console.log("---------");
printBox(5,5);
console.log("---------");
printBox(1,2);
