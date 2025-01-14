// 278 시간 => 11일 몇시간 입니다.
// 입력받은 값을 기준으로 일을 계산(입력받은 값/ 24시간 => 일).
// 전체값에서 나머지 계산(입력받은 값% 24시간 => 시간)
// let inputTimes = prompt("시간을 입력하세요: ");
// let days = parseInt(inputTimes / 24);
// let hours = inputTimes % 24;
// console.log(`${inputTimes}시간은 ${days}일 ${hours}시간 입니다.`);

// 89345 분 => ?일 ?시간 ?분 입니다.
let inputMinutes = prompt("분을 입력하세요: ");
let minutesPerDay = (24 * 60); // 1440
let days = parseInt(inputMinutes / minutesPerDay);
let hours = parseInt((inputMinutes % minutesPerDay) / 60);
let minutes = inputMinutes % 60;

console.log(`${inputMinutes}분은 ${days}일 ${hours}시간 ${minutes}분 입니다.`);