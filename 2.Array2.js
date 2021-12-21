const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
// const arr4 = [0, 0, 0, 0, 0];

// const arr5 = new Array.fill(5);
const arr6 = Array.from(
  Array(5, function (v, k) {
    return k + 1;
  })
);

const arr7 = [1, 2, 3, 4, 5, 6];
console.log(arr7.join(", "));

//concat
console.log(arr6.concat(arr7));

//pop ,push
const arr = [1, 2, 3, 4, 5, 6];
arr.push(8);
arr.pop(8);

//shift, unshift
arr.shift();
arr.unshift();

//slice 원본배열에 영향을 주지않는다.
console.log(arr.slice(2, 4));

//splice
console.log(arr.splice(2, 2));

//배열순회
for (let i = 0; i < 6; i += 1) {
  console.log(arr[i]);
}

for (const item of arr) {
  console.log(item);
}
