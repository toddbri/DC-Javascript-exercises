str = "abcdefghijklmnopqrstuvwxyz";
strUpper = str.toUpperCase(str);
function chiper(string,offset){
  out_str = "";

  for (var i=0;i<string.length;i++){
    l = string.charAt(i);
      if (l === " "){
        out_str += " ";
      } else {
          uppercase = Boolean(0);
          if (strUpper.lastIndexOf(l) !=-1){
            uppercase = Boolean(1);
            l = l.toLowerCase();
          }
          m = str.lastIndexOf(l) + offset;
          if (m>25){
            m -=26;
          }
          l2 = str.charAt(m);
          if (uppercase){
            l2 = l2.toUpperCase();
          }
          out_str +=l2;
      }

  }
  return out_str;
}

console.log(chiper("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar",13));

console.log(chiper("Genius without education is like silver in the mine",13));
