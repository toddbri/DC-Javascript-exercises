dict = {"a":4,"e":3,"g":6,"l":1,"o":0,"s":5,"t":7,"A":4,"E":3,"G":6,"L":1,"O":0,"S":5,"T":7};

function leetspeak(string){
  str_out = "";
  for (var i=0;i<string.length;i++){

    if(string.charAt(i) in dict){
      str_out +=dict[string.charAt(i)];
    } else {
      str_out +=string.charAt(i);
    }

  }
  return str_out;
}

console.log(leetspeak("Leet"));
