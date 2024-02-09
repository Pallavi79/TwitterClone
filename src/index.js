const express = require('express');
const connect = require('./config/database');
// const Tweet = require('./models/tweet')
const app = express();
const {TweetRepository}=require('./repository/index');
const TweetService=require('./services/tweet-service')

app.listen(3000, async()=>{
    console.log('listening on port 3000');
    await connect();
    console.log("connected to database");

    let repo = new TweetRepository();
    let service = new TweetService();
    const tweet = await service.create({
        content:'I am learning #Java and #coding. I am also learning #DBMS.'
    })
    console.log(tweet);
    
})