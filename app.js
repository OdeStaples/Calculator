let runningTotal = 0; // variable to store the numbers given by input
let click = "0"; // variable to keep track of the input
let operator = null; // variable for the operator
const screen = document.querySelector(".window"); // constant for the calc-screen

// adding listners to the inner-text of calc-buttons class so that the values get passed as parameters to the buttonClick function
let operations = document.querySelector(".calc-buttons");
operations.addEventListener("click",function(event){
  buttonClick(event.target.innerText);
})

// Function to check whether the input is of a number type or not
function buttonClick(value){
  if(isNaN(parseInt(value))){
    handleSymbol(value);
  }
  else{
    handleNumber(value);
  }
  render();
}

// Function that handles operators, clear, backspace, =
function handleSymbol(value){
  switch(value){
    case 'C':
      click = "0";
      runningTotal = 0;
      operator = null;
      break;

      case '=': 
       if(operator === null){
         return;
       }
       
         performOperation(parseInt(click));
         operator = null;
         click = "" + runningTotal;
         runningTotal = 0;
         break;
       
      case '←':
        if(click.length === 1){
          click = 0;
        }
        else{
         click = click.substring(0, click.length - 1);
        }
        break;

      default:
        handleMath(value);
        break;
  }
}

// Function that appends the valid numerical input from the user
function handleNumber(value){
  if(click === "0"){
    click = value;
  }
  else{
    click+=value;
  }
}

// Function that handles operators
function handleMath(value){
  const intClick = parseInt(click);
  if(runningTotal === 0){
    runningTotal = intClick;
  }
  else{
    performOperation(intClick);
  }
  operator = value;
  click = "0";
}

// Functon that handles mathematical operations
function performOperation(value){
  if(operator === "+"){
    runningTotal += value;
  }
  else if(operator === "–"){
    runningTotal -= value;
  }
  else if(operator === "÷"){
    runningTotal /= value;
  }
  else {
    runningTotal *= value;
  }
}

// Funtion that shows input on the screen
function render(){
  screen.innerText = click;
}