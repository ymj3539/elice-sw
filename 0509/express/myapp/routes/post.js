const express = require('express');
const BookSchema = require('../models/book');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('post');
});

router.post('/', (req, res) => {
  const name = req.body.name;
  const number = req.body.phone;
  const date = req.body.date;
  //요청.

  //응답.
  res.json({ name: name, number: Number, date: date });
  //response 응답.
  // 웹 통신 방식 1요청 1응답.
  // 1요청 1응답 통신 종료 정상.
  //next();
});

// router.post('/', (req, res) => {
//   // res.redirect ==> 호출한 경로로 재접근
//   res.redirect('/expost');
// });

router.post('/addbook', (req, res) => {
  const bookname = req.body.bookname;
  const auther = req.body.auther;
  const price = req.body.price;
  const date = req.body.date;

  let bookData = new BookSchema({
    bookname: bookname,
    auther: auther,
    price: price,
    publish: date,
  });

  bookData.save();
  res.redirect('/expost');
});

module.exports = router;
