let button = [
  "button2",
  "button3",
  "button6",
  "button7",
  "button10",
  "button11",
  "button14",
  "button15",
];

function shuffleColors() {
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
  colors.sort(() => Math.random() - 0.5);

  const buttons = document.getElementsByClassName("st");

  for (let i = 0; i < colors.length; i++) {
    buttons[i].style.backgroundColor = colors[i];
  }
  return shuffleColors();
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
