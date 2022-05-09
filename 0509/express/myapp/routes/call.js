const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('test express');
  res.send('hello express');
  next(); //현재 미들웨어의 기능을 마치고, 다음 미들웨어로 연결을 해준다.
});

router.get('/', (req, res, next) => {
  console.log('2nd express');
  //화면이 나와야 함.
});

router.get('/member', (req, res) => {
  res.send('call member');
});

router.get('/member/:id', (req, res) => {
  const member = req.params.id;
  console.log(member);
  res.send(`${member}`);
});

//Single 쓰레드. 기반으로 빠르게 처리하는..

module.exports = router; // ==> app.js
