
// Grab elements
const btn = document.getElementById("btn");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");

// Function to generate a random hex color
function getRandomColor() {
  // Generate a random number between 0 and 16777215 (hex: #000000 to #ffffff)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor.padStart(6, '0'); // pad in case it's shorter than 6 digits
}

btn.addEventListener("click", () => {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});




