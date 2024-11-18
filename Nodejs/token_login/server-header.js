const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const users = [
  {
    user_id: 'test',
    user_password: '1234',
    user_name: '테스트 유저',
    user_info: '테스트 유저입니다',
  },
];

const app = express();

app.use(
  cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:[사용중인 포트번호]'],
    methods: ['OPTIONS', 'POST', 'GET', 'DELETE'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const secretKey = 'ozcodingschool';

app.post('/', (req, res) => {
  const { userId, userPassword } = req.body;
  const userInfo = users.find(
    (el) => el.user_id === userId && el.user_password === userPassword
  );

  if (!userInfo) {
    res.status(401).send('로그인 실패');
  } else {
    const accessToken = jwt.sign({ userId: userInfo.user_id }, secretKey, {
      expiresIn: 1000 * 60 * 10,
    });
    res.send(accessToken);
  }
});

app.get('/', (req, res) => {
  const accessToken = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(accessToken, secretKey);
  const userInfo = users.find((el) => el.user_id === payload.userId);
  return res.json(userInfo);
});

app.listen(3000, () => console.log('서버 실행!'));
