function hello(name){
  if (name === undefined){
    name = "world!";
  }

  console.log("Hello, " + name);
}

hello('Mustache');
hello();
