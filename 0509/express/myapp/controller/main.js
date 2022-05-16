// [routes] - [index.js]의 router를 여기로 가져옴
const mainscreen = (req, res) => {
  res.render('index', { title: 'Express' });
};

// mainscreen export함 -> index에서 받을 것임
module.exports = {
  mainscreen,
};
