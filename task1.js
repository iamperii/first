let arr = [14, 16, 3, 7, 17, 19, 9];
let newArr = [];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    newArr.push(arr[i]);
    max = arr[i];
  } else {
    max = arr[i];
  }
}
console.log(newArr);
