function longLongVowels(string){
  x=0;
  lvlu = {"oo":"ooooo","ee":"eeeee","aa":"aaaaa","ii":"iiiii","uu":"uuuuu"};
  strOut = "";
  while (x<string.length){
    if (string.slice(x,x+2) in lvlu){
      strOut += lvlu[string.slice(x,x+2)];
      x +=1;
    }else {
      strOut +=string.charAt(x);
    }
    x+=1;
  }
  return strOut;
}

console.log(longLongVowels("Good"));
console.log(longLongVowels("Cheese"));
console.log(longLongVowels("Man"));
console.log(longLongVowels("Goodeeoo"));
