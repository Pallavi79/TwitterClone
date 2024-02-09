const LikeService = require('../services/like-service');

const likeService = new LikeService();
const toggleLike = async(req,res)=>{
    // console.log('inside toggle like controller')
    try {
        const response = await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(201).json({
            success:true,
            message:'Successfully toggled like',
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

module.exports = toggleLike;