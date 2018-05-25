let randomColor = (int) => {
  return Math.floor(Math.random() * 251);
}

let randomCell = (num) => {
  return Math.floor(Math.random() * 17)
}

let queue = [];
let arr = [];
for(let i = 1; i <= 16; i++) {
  arr.push(i);
}

let changeColor = () => {
  let r = randomColor(255);
  let g = randomColor(255);
  let b = randomColor(255);
  if(queue.length < 9) {
    let randomIdx = Math.floor(Math.random() * arr.length);

    let selectedCellNum = arr[randomIdx];

    let selectedCell = document.getElementById(selectedCellNum.toString());

    selectedCell.style.backgroundColor = `rgb(${r},${g},${b})`;
    arr.splice(randomIdx, 1);
    queue.push(selectedCellNum);
  }
  else {
    let first = queue.shift();
    arr.push(first);
    randomIdx = Math.floor(Math.random() * arr.length);

    selectedCellNum = arr[randomIdx];

    selectedCell = document.getElementById(selectedCellNum.toString());

    selectedCell.style.backgroundColor = `rgb(${r},${g},${b})`;
    arr.splice(randomIdx, 1);
    queue.push(selectedCellNum);
  }
}


setInterval(changeColor, 250)

