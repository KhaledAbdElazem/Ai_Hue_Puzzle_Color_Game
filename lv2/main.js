let originalColors = [
  "#AA7105", //2
  "#CE8906", //3
  // "#FBA708", //4
  "#3F5305", //5
  // "#688B08", //6
  "#8DBB0B", //7
  "#BBF80F", //8
  "#024801", //9
  "#047D02", //10
  // "#06B904", //11
  "#08F705", //12
  "#08895B", //14
  "#0BBC7E", //15
  // "#0FFEA9", //16
];

function hexToRgb(hex) {

  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function checkWin() {
  const buttonElements = document.querySelectorAll(".st");
  console.log("Checking win...");

  let isWin = true;
  for (let i = 0; i < originalColors.length; i++) {
    const currentColor = buttonElements[i].style.backgroundColor;
    const originalColorRGB = hexToRgb(originalColors[i]);
    console.log("Button color:", currentColor);
    console.log("Original color:", originalColorRGB);
    if (currentColor !== originalColorRGB) {
      isWin = false;
      break;
    }
  }

  if (isWin) {
    alert("Congratulations! You won!");
    window.location.href = "../lv3/index.html";
  } else {
    console.log("Not a win yet.");
  }
}

let buttons = [
  // "button1",
  "button2",
  "button3",
  // "button4",
  "button5",
  // "button6",
  "button7",
  "button8",
  "button9",
  "button10",
  // "button11",
  "button12",
  // "button13",
  "button14",
  "button15",
  // "button16",
];
let colors = [
  "#AA7105", //2
  "#CE8906", //3
  // "#FBA708", //4
  "#3F5305", //5
  // "#688B08", //6
  "#8DBB0B", //7
  "#BBF80F", //8
  "#024801", //9
  "#047D02", //10
  // "#06B904", //11
  "#08F705", //12
  "#08895B", //14
  "#0BBC7E", //15
  // "#0FFEA9", //16
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
}

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
        checkWin();
      }
    });
  });
});
