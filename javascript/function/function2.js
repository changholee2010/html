// function2.js
/*
   함수이름: getMax
   매개변수: 배열(numAry)
   기능: 배열의 요소중에서 제일큰값을 콘솔출력.
*/

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];
for (let i = 0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}
console.log(ary3);

// 매개변수로 받은 값중에서 제일큰 요소를 출력.
function getMax(numAry = []) {
  let max = 0; // 제일큰값을 담아놓을 변수선언.
  // 배열을 다 비교하도록 반복문.
  for (let i = 0; i < numAry.length; i++) {
    // 제일큰값을 max에 저장하기.
    if (max < numAry[i]) {
      max = numAry[i];
    }
  }
  console.log(`제일큰값은 ${max}`);
  return max; // 함수를 호출한 영역으로 반환.
} // end of getMax()


document.write(getMax(ary1));
// alert(getMax(ary2));
getMax(ary3);

// getMax();