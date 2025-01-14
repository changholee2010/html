// condition2.js
// 입력받은 숫자 => 2의 배수인지, 3의 배수인지?
// 6 => 2 와 3의 배수입니다.
// 4 => 2의 배수입니다., 9 => 3의 배수입니다.

let anyNumber = prompt("숫자를 입력하세요:");
// "0" === 0
// try {
//   let a = parseInt(anyNumber);
// } catch (err) {
//   console.log('aaa')
// }
anyNumber = parseInt(anyNumber);

console.log(anyNumber);

if (anyNumber == 0 || isNaN(anyNumber)) {
  console.log('정상적인 값을 입력하세요.');
} else {
  if (anyNumber % 2 == 0 && anyNumber % 3 == 0) {
    console.log('2와 3의 배수입니다.');
  } else if (anyNumber % 2 == 0) {
    console.log('2의 배수입니다.');
  } else if (anyNumber % 3 == 0) {
    console.log('3의 배수입니다.');
  }
}