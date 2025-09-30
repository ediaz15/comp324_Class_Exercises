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


  //Exercise part 4 Html and JS
  // add event listener for keypress in note input field
    const textTyper = document.getElementById("textTyping");
      //[65, 90] Uppercase, [97,122] lowercase (ASCII VALUES!)
      textTyper.addEventListener("keypress", (e) => {
        if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
            console.log("LETTERS AND MORE LETTERS!!!..."); 
        }

        if(e.keyCode === 13){ //enter key!!!
          console.log("ENTER KEY WAS PRESSED!!!");
        }
    });
  }

// start main()
main();
