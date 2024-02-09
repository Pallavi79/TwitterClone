const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
const LikeService=require('./services/like-service');

const apiRoutes = require('./routes/index');
app.use('/api',apiRoutes);

const {UserRepository, TweetRepository} = require('./repository/index')

app.listen(3000, async()=>{
    console.log('listening on port 3000');
    await connect();
    
    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await  tweetRepo.getAll(0,10);
    // const users = await userRepo.getAll(0,10)

    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id);

})
