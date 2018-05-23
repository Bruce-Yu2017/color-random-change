let randomColor = (int) => {
  return Math.floor(Math.random() * 251);
}

let randomCell = (num) => {
  return Math.floor(Math.random() * 17)
}

setInterval(() => {
  let cell = document.getElementById(randomCell(17).toString());
  // console.log(cell);
  let r = randomColor(255);
  let g = randomColor(255);
  let b = randomColor(255);
  cell.style.backgroundColor = `rgb(${r},${g},${b})`;
}, 250)

