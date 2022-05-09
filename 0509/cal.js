// 덧셈, 뺄셈, 곱셈

// 덧셈.

function add(a, b) {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

//module을 선언해서 add를 빼서 다른곳에서 add라고 호칭할 수 있게 해줄 것임.
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

//node를 실행시키는 또 다른 방법(실제로 많이 쓰임)
module.exports = {
  add: add,
  sub: sub,
  mul: mul,
};
