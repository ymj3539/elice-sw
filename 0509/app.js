//기본 실행을 하는 파일
//계산기 작성

const cal = require('./cal');

const func = require('./func');

// console.log(cal.add(5, 3));
// console.log(cal.sub(5, 3));
// console.log(cal.mul(5, 3));

// console.log(func);

//같은 기능을 여러번 중복적으로 활용.
//module은 require될때 한번만 호출됨.
for (let i = 0; i < 10; i++) {
  console.log(func());
}
