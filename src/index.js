require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database');
const passport = require('passport');
const passportAuth = require('./config/jwt-middleware')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(passport,passport.initialize());
passportAuth(passport);

const apiRoutes = require('./routes/index');
app.use('/api',apiRoutes);

const port = process.env.PORT;
app.listen(port, async()=>{
    console.log(`listening on port ${port}`);
    await connect();
})
