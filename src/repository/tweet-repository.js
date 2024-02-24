const Tweet = require('../models/tweet')
const CrudRepository = require('./crud-repository');
const cloudinary = require('../config/cloudinary-config');
class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
    async create(file,data){

        try {
            let tweet = null;
            if(!file){
                tweet = await Tweet.create({content:data});
            }
            else{
                const result = await cloudinary.uploader.upload(file.path);
                const image = result.secure_url;
                tweet = await Tweet.create({content:data,imageUrl:image});
            }
            return tweet;
        } catch (error) {
            console.log(error);
        }

    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({
                path: 'comments',
                populate: {
                    path: 'comments'
                }
            }).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset,limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id){
        try {
            const result = await this.model.findById(id).populate({path:'likes'})
            return result;
        } catch (error) {
           console.log(error)
        }
    }
}

module.exports= TweetRepository;