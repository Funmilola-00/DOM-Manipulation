function changeText() {
  let element = document.getElementById("myElement");
  let newText = prompt("Enter new text:");
  if (newText !== null) {
    element.innerText = newText;
  }
}

function changeColor() {
  let element = document.getElementById("myElement");
  let randomColor = getRandomColor();
  element.style.color = randomColor;
}

function changeFontSize(size) {
  let element = document.getElementById("myElement");
  element.style.fontSize = size + "px";
}

function changeCustomColor(color) {
  let element = document.getElementById("myElement");
  element.style.color = color;
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
