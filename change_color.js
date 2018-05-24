var randomColor = (int) => {
  return Math.floor(Math.random() * 251);
}

var randomCell = (num) => {
  return Math.floor(Math.random() * 17)
}

var queue = [];
var arr = [];
for(var i = 1; i <= 16; i++) {
  arr.push(i);
}
console.log("arr: ", arr)

var changeColor = () => {
  var r = randomColor(255);
  var g = randomColor(255);
  var b = randomColor(255);
  if(queue.length < 9) {
    var randomIdx = Math.floor(Math.random() * arr.length);
    // console.log('randomIdx: ', randomIdx);

    var selectedCellNum = arr[randomIdx];
    // console.log('selectedCellNum: ', selectedCellNum);

    var selectedCell = document.getElementById(selectedCellNum.toString());
    // console.log('selectedCell: ', selectedCell);

    selectedCell.style.backgroundColor = `rgb(${r},${g},${b})`;
    arr.splice(randomIdx, 1);
    // console.log('arr: ', arr);
    queue.push(selectedCellNum);
    // console.log('queue: ', queue);
  }
  else {
    console.log("???")
    var first = queue.shift();
    arr.push(first);
    var randomIdx = Math.floor(Math.random() * arr.length);
    // console.log('randomIdx: ', randomIdx);

    var selectedCellNum = arr[randomIdx];
    // console.log('selectedCellNum: ', selectedCellNum);

    var selectedCell = document.getElementById(selectedCellNum.toString());
    // console.log('selectedCell: ', selectedCell);

    selectedCell.style.backgroundColor = `rgb(${r},${g},${b})`;
    arr.splice(randomIdx, 1);
    // console.log('arr: ', arr);
    queue.push(selectedCellNum);
    // console.log('queue: ', queue);
  }
}


setInterval(changeColor, 1000)

