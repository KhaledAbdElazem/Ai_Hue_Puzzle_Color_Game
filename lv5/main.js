function generateButtons() {
  const gameDiv = document.createElement('div');
  gameDiv.classList.add('game');

  const buttonStyles = [
      '#390000', '#660100', '#9a0100', '#cd0200', '#fc0200', '#fc1774', '#cf135f', '#a60f4c',
      '#770b37', '#3c051b', '#4c1702', '#6c2104', '#942e05', '#c73d07', '#f84d09', '#adfc00',
      '#8dce00', '#71a400', '#557c00', '#395300'
  ];

  const buttonTexts = ['⟶', '⟵', '', '⟶', '⟵', '', '⟵', '', '', '⟵', '⟶', '', '', '⟶', '', '', '⟵', '', ''];

  for (let i = 0; i < 20; i++) {
      const button = document.createElement('button');
      button.id = 'button' + (i + 1);
      button.textContent = buttonTexts[i];
      if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) {
          button.style.backgroundColor = buttonStyles[i];
      } else if (i >= 5 && i <= 14) {
          button.classList.add('st');
      } else {
          button.style.backgroundColor = buttonStyles[i];
      }
      gameDiv.appendChild(button);
  }

  return gameDiv;
}


const parentElement = document.querySelector('.box');
parentElement.appendChild(generateButtons());





let button = [
  // "button1",
  "button2",
  "button3",
  // "button4",
  "button5",
  "button6",
  // "button7",
  "button8",
  "button9",
  // "button10",
  // "button11",
  "button12",
  "button13",
  // "button14",
  "button15",
  "button16",
  // "button17",
  "button18",
  "button19",
  // "button20",
];
function shuffleColors() {
  let colors = [
    // "#281a45", //1
    "#660100", //2
    "#9A0100", //3
    // "#CD0200", //4
    "#FC0200", //5
    "#FC1774", //6
    // "#CF135F", //7
    "#A60F4C", //8
    "#770B37", //9
    // "#047D02", //10
    // "#bd6a5f", //11
    "#6C2104", //12
    "#942E05", //13
    // "#C73D07", //14
    "#F84D09", //15
    "#ADFC00", //16
    // "#8DCE00", //17
    "#71A400", //18
    "#557C00", //19
    // "#ecfe86", //20
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
