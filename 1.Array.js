// 빈 Array 생성
let arr1 = [];
console.log(arr1);

//미리 초기화된 Array를 생성할 수 있다.
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

// 많은 값을 같은 값으로 초기화 할 경우 fill을 쓸 수 있다.
let arr3 = Array(10).fill(0);
console.log(arr3);

// 특정 로직을 사용하여 초기화할 경우 from을 사용할 수 있다.
let arr4 = Array.from({ length: 100 }, (_, i) => i);
console.log(arr4);

//자바스크립트의 Array는 다른 언어의 Array와 조금 다르다
//자바스크립트의 Array는 동적이다.

const arr = [];
console.log(arr);
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
console.log(arr);

//자바스크립트의 Array는 HashMap에 가깝다.
console.log(arr.length);

//index가 number가 아니어도 된다.
arr["string"] = 10;
arr[false] = 0;
console.log(arr);
console.log(arr.length);
arr[4] = 5;
console.log(arr.length);
