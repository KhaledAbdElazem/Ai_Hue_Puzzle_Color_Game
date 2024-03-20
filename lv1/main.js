let buttons = [
  "button2",
  "button3",
  "button6",
  "button7",
  "button10",
  "button11",
  "button14",
  "button15",
];
let colors = [
  "#320b85",
  "#470fbd",
  "#05608c",
  "#0683be",
  "#11afa2",
  "#14d1c1",
  "#138a38",
  "#19b549",
];

function shuffleColors() {
  colors.sort(() => Math.random() - 0.5);

  const buttonElements = document.getElementsByClassName("st");

  for (let i = 0; i < colors.length; i++) {
    buttonElements[i].style.backgroundColor = colors[i];
  }
}

function swapColors(button1, button2) {
  const color1 = button1.style.backgroundColor;
  const color2 = button2.style.backgroundColor;
  button1.style.backgroundColor = color2;
  button2.style.backgroundColor = color1;

  // Check for win after each swap
  // checkAndNotifyWin(); 
}

// function checkWin() {
//   let sortedColors = [...colors];
//   sortedColors.sort();

//   for (let i = 0; i < buttons.length; i++) {
//     let buttonId = buttons[i];
//     let color = colors[i];

//     let button = document.getElementById(buttonId);
//     let computedStyle = window.getComputedStyle(button);
//     let backgroundColor = computedStyle.backgroundColor;

//     if (backgroundColor !== color) {
//       return false; // If any button's color doesn't match its sorted color, return false
//     }
//     else{
//       alert("Congratulations! You've sorted all buttons!");
//       console.log("Hello world");
//     }
//   }

//   // return true; // If all colors match their sorted colors, return true
// }

// function checkAndNotifyWin() {
//   if (checkWin()==true) {

//     // Additional actions to take upon winning, such as resetting the game or advancing to the next level
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".st");
  let firstButton = null;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!firstButton) {
        firstButton = this;
      } else {
        swapColors(firstButton, this);
        firstButton = null;
      }
    });
  });
});
