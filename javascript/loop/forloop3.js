// forloop3.js
let score1 = 90;
let sum = 0;

let numAry = [10, 20, 30, 40]; //배열생성.
numAry[4] = 50;
numAry[5] = 60;
numAry[6] = 70;
numAry[7] = 80;
console.log(numAry.length);

// 6번째 위치값(60)을 7번째 이동.
// 7번째 위치값을(70) 6번째 이동.
let pos = 1;
let temp = numAry[pos + 1];
numAry[pos + 1] = numAry[pos];
numAry[pos] = temp;

for (let i = 0; i < numAry.length; i++) {
  console.log(`${i}번째의 값=> ${numAry[i]}`);
  sum += numAry[i];
}

console.log(sum);