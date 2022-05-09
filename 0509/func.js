//모듈을 함수형. 함수로
// let number = 0;
// module.exports = number;

let number = 0;

module.exports = () => {
  return (number += 1);
};
