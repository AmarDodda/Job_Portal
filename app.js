// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const userRouter = require('./routes/userRoutes');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

// app.use(cors({
//     origin: '*',
//     credentials: true
// }));

// app.use((req, res, next) => {
//     console.log('Middleware check:', req.originalUrl); 
//     next(); 
// });

// app.use(cookieParser());
// app.use(express.json());
// app.use(morgan('dev'));

// app.use('/users', userRouter); 


// module.exports = app;

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));

app.use((req, res, next) => {
    console.log('Middleware check:', req.originalUrl); 
    next(); 
});

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRouter);

export default app;

