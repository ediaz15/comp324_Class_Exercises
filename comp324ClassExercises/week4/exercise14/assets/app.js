function main() {
  "use strict";

  //gets the button ID
  const linearFuncButton = document.getElementById("linearFuncButton");
  //EVENT LISTENER FOR THE BUTTON CLICKING!!!
  let linearFuncOutput = document.querySelector(".linearFuncOutput");

  linearFuncButton.addEventListener('click', () => {

    let text = document.createElement('p');
    //Exercise - HTML & JS - part 3

    let inputValue = linearFuncBox.value;
    let outputText = document.createTextNode(inputValue);
    text.appendChild(outputText);
    linearFuncOutput.appendChild(text);
  });
}

// start main()
main();
