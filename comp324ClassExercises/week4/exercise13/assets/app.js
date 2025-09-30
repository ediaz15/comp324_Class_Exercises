function main() {
  "use strict";
  //Exercise - HTML & JS - part 2

  //gets the button ID
  const linearFuncButton = document.getElementById("linearFuncButton");
  //EVENT LISTENER FOR THE BUTTON CLICKING!!!
  linearFuncButton.addEventListener("click", linearFuncInput);

  function linearFuncInput() {
    console.log("BUTTON WAS CLICKED");
  }
}

// start main()
main();
