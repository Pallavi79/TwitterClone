const {TweetRepository,HashtagRepository} = require('../repository/index')

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(file,data){
        const content = data;
        //regex to extract hashtags
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
        .map((tag)=>tag.substring(1).toLowerCase());

        const tweet = await this.tweetRepository.create(file,data);

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);

        let titleOfPresentTags = alreadyPresentTags.map((tag)=>tag.title);

        let newTags = tags.filter(tag=>!titleOfPresentTags.includes(tag));
        
        newTags=newTags.map(tag=>{
            return {title:tag,tweets:[tweet.id]}
        });

        await this.hashtagRepository.bulkCreate(newTags)

        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}
module.exports = TweetService;