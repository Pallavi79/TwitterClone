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
    // const tweet = await tweetRepo.get('65c1f4218201051b9ef9c901')
    // const tweet = await tweetRepo.update('65c1f4218201051b9ef9c901',{content:'latest content'})

    //const tweet = await tweetRepo.create({content:'Pagination tweet'});
    // console.log(tweet);
    // tweet.comments.push({content:'first comment'});
    // await tweet.save();
    // console.log(tweet);

    // const tweet = await tweetRepo.create({content:'Tweet with comment schema'});

    // const comment = await Comment.create({content:'new comment'});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);

    //const tweet = await tweetRepo.get('65c231f626f07a965111432f');

    const tweet = await tweetRepo.getAll(0,4);
    //virtuals
    console.log(tweet[0].contentWithEmail);

    //console.log(tweet);
})