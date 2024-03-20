let button = [
  "button1",
  // "button2",
  "button3",
  "button4",
  "button5",
  "button6",
  // "button7",
  "button8",
  "button9",
  // "button10",
  "button11",
  "button12",
  "button13",
  "button14",
  // "button15",
  "button16",
];
function shuffleColors() {
  let colors = [
    "#281a45", //1
    // "#AA7105", //2
    "#6a46b8", //3
    "#915ffa", //4
    "#502a4c", //5
    "#85467d", //6
    // "#8DBB0B", //7
    "#fe86f0", //8
    "#4e2c27", //9
    // "#047D02", //10
    "#bd6a5f", //11
    "#fa8c7e", //12
    "#555c30", //13
    "#8f9a52", //14
    // "#0BBC7E", //15
    "#ecfe86", //16
  ];

  colors.sort(() => Math.random() - 0.5);

  const buttons = document.getElementsByClassName("st");

  for (let i = 0; i < colors.length; i++) {
    buttons[i].style.backgroundColor = colors[i];
  }
  // return shuffleColors();
}

function swab(event) {
  const clickShape = event.target;

  const selectedShape = document.querySelector(".button");

  if (selectedShape && selectedShape !== clickShape) {
    const tempColor = selectedShape.style.backgroundColor;
    selectedShape.style.backgroundColor = clickShape.style.backgroundColor;
    clickShape.style.backgroundColor = tempColor;
    selectedShape.classList.remove("st");
  } else if (selectedShape === clickShape) {
    clickShape.classList.remove("st");
  } else {
    clickShape.classList.add("st");
  }
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
      }
    });
  });

  function swapColors(button1, button2) {
    const color1 = button1.style.backgroundColor;
    const color2 = button2.style.backgroundColor;
    button1.style.backgroundColor = color2;
    button2.style.backgroundColor = color1;
  }
});
