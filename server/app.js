const express = require('express');
const path  = require('path');
const serveStatic = require('serve-static');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const userRoutes = require('./api/routes/user');

const dbUrl = 'mongodb://node-shop:'+process.env.MONGO_ATLAS_PASS+'@node-rest-shop-shard-00-00-emxze.mongodb.net:27017,node-rest-shop-shard-00-01-emxze.mongodb.net:27017,node-rest-shop-shard-00-02-emxze.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(dbUrl,{
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('Connection success!');
    }).catch(err => {
    console.log('Connection error: ',err);
});

mongoose.Promise = global.Promise;
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'Options'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }
    next();
});

app.use("/", serveStatic(path.join(__dirname, "../dist")));
// app.use("/*", serveStatic(path.join(__dirname, "../dist/index.html")));

// Routes
app.use('/user', userRoutes);
//Handle Errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;