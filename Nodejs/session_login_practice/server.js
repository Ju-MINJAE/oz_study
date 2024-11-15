const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const users = [
  {
    user_id: 'test1',
    user_password: '1234',
    user_name: '홍길동',
    user_info: '서울에 거주하는 김오즈입니다.',
  },
  {
    user_id: 'test2',
    user_password: '4567',
    user_name: '황웅자',
    user_info: '부산에 거주하는 박코딩입니다.',
  },
  {
    user_id: 'test3',
    user_password: '7890',
    user_name: '이바울',
    user_info: '경기에 거주하는 이쿠키입니다.',
  },
  {
    user_id: 'test4',
    user_password: '1357',
    user_name: '박민수',
    user_info: '제주에 거주하는 최노드입니다.',
  },
];

const app = express();

app.use(
  cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    methods: ['OPTIONS', 'POST', 'GET', 'DELETE'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use(
  session({
    secret: 'session secret',
    resave: false,
    saveUninitialized: false,
    name: 'session_id',
  })
);

app.post('/', (req, res) => {
  const { userId, userPassword } = req.body;
  const userInfo = users.find(
    (el) => el.user_id === userId && el.user_password === userPassword
  );

  if (!userInfo) {
    res.status(401).send('로그인 실패');
  } else {
    req.session.userId = userInfo.user_id;
    res.send('세션 생성 완료!');
  }
});

app.get('/', (req, res) => {
  const userInfo = users.find((el) => el.user_id === req.session.userId);
  return res.json(userInfo);
});

app.delete('/', (req, res) => {
  req.session.destroy();
  res.clearCookie('session_id');
  res.send('세션 삭제 완료!');
});

app.listen(3000, () => console.log('서버 실행!'));
