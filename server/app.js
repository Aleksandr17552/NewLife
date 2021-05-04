import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import postsRouter from './routes/posts';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, "../build")));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/popper.js/dist/umd')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/post', postsRouter);

export default app;
