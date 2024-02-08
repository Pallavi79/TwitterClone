const express = require('express');
const connect = require('./config/database');
// const Tweet = require('./models/tweet')
const app = express();
const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comment')

app.listen(3000, async()=>{
    console.log('listening on port 3000');
    await connect();
    console.log("connected to database");
    // const tweet = await Tweet.create({
    //     content:'Another tweet',
    // });
    // const tweet = await Tweet.findById('65c1f4218201051b9ef9c901');
    // tweet.userEmail="def@gmail.com";
    // tweet.save();

    const tweetRepo = new TweetRepository();
    await tweetRepo.create({content:'With hooks now',userEmail:'hooksnow@gmail.com'});

    //console.log(tweet);
})