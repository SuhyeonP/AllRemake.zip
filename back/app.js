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
connection.query("set session character_set_connection=utf8;");
connection.query("set session character_set_results=utf8;");
connection.query("set session character_set_client=utf8;");


app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use('/', express.static(path.join(__dirname, 'img')));
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

app.listen(3065, () => {
    console.log('서버 실행 중!');
});
