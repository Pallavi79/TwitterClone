const CommentService = require('../services/comment-service');

const commentService = new CommentService();

const createComment = async(req,res)=>{
    // console.log('inside comment controller');
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType,req.body.userId , req.body.content);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new comment',
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

module.exports = createComment;