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


app.listen(3000, async()=>{
    console.log('listening on port 3000');
    await connect();

})
