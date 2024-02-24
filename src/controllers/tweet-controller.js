const TweetService = require('../services/tweet-service');

const tweetService = new TweetService();
const createTweet = async(req,res)=>{
    try {
        let response=null;
        if(req.file){
            response = await tweetService.create(req.file,req.body.content);
        }
        else if(req.body.content){
            response = await tweetService.create(null,req.body.content);
        }else{
            return res.status(400).json({
                success: false,
                message: 'Please provide either an image or content for the tweet',
                data: {},
                err: {}
            });
        }
        return res.status(201).json({
            success:true,
            message:'Successfully created a new Tweet',
            data:response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:'Something went wrong',
            data:{},
            err:error
        });
    }
}

const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet from service',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}

module.exports = {
    createTweet,
    getTweet
}
