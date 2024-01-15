function changeText() {
  var element = document.getElementById("myElement");
  var newText = prompt("Enter new text:");
  if (newText !== null) {
    element.innerText = newText;
  }
}

function changeColor() {
  var element = document.getElementById("myElement");
  var randomColor = getRandomColor();
  element.style.color = randomColor;
}

function changeFontSize(size) {
  var element = document.getElementById("myElement");
  element.style.fontSize = size + "px";
}

function changeCustomColor(color) {
  var element = document.getElementById("myElement");
  element.style.color = color;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
