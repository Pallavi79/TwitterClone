const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
const service = require('./services/tweet-service');

const apiRoutes = require('./routes/index');
app.use('/api',apiRoutes);

app.listen(3000, async()=>{
    console.log('listening on port 3000');
    await connect();
    // let ser = new service();
    // await ser.create({content:'I am learning #Java. #Programming is interesting'});
})