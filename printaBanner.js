function printBanner(str){
  stars ="";
  for (var i=1;i<=str.length +4 ;i++){
    stars +="*";
  }
  console.log(stars);
  console.log("* " + str + " *");
  console.log(stars);
}

printBanner("Welcome to DigitalCrafts");
