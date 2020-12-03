const express=require('express')
const session=require('express-session')
const dotenv=require('dotenv');
const app=express()
const cookieParser=require('cookie-parser')
const path=require('path');
const morgan=require('morgan')
const cors=require('cors')
const { connection }=require('./mysql/index');

dotenv.config()
connection.connect()

const lolRouter=require('./routes/lol');
const baedalRouter=require('./routes/baedal');
const gikalRouter=require('./routes/gikal');
const cafeRouter=require('./routes/cafe');
const svtRouter=require('./routes/seventeen');
connection.query("set session character_set_connection=utf8;");
connection.query("set session character_set_results=utf8;");
connection.query("set session character_set_client=utf8;");


app.use(morgan('dev'))
app.use(cors({
    origin: ['http://localhost:3000','http://suhyeon.shop','http://3.35.217.72'],
    credentials: true,
}));
app.use('/', express.static(path.join(__dirname, 'img')));
app.use('/svt', express.static(path.join(__dirname, 'seventeen')));
app.use('/gik/resources/img/char', express.static(path.join(__dirname, 'gikal')));
app.use('/gik/resources/img/que', express.static(path.join(__dirname, 'gikalq')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));

app.get('/', (req, res) => {
    res.send('hello express');
});
app.get('/test', (req, res) => {
    res.send('hello express');
});
app.use('/lol',lolRouter);
app.use('/gikal',gikalRouter);
app.use('/baedal',baedalRouter);
app.use('/cafe',cafeRouter);
app.use('/svt',svtRouter);

app.listen(80, () => {
    console.log('서버 실행 중!');
});
// app.listen(3065, () => {
//     console.log('서버 실행 중!');
// });
