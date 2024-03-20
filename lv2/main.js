


let button = [
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

function shuffleColors() {
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
