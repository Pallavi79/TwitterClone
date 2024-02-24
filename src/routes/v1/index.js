const express = require('express');
const multer = require('multer');
const {createTweet, getTweet} = require('../../controllers/tweet-controller');
const toggleLike = require('../../controllers/like-controller')
const createComment = require('../../controllers/comment-controller');
const {signup,login} = require('../../controllers/auth-controller');
const authenticate = require('../../middlewares/authenticate');
const test = require('../../controllers/test-controller');
const upload = require('../../middlewares/multer-middleware');
const router = express.Router();

router.post('/tweets',authenticate,upload.single('image'),createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',toggleLike);

router.post('/comments',authenticate,createComment);

router.post('/signup',signup);
router.post('/login',login);

router.get('/test',authenticate,test);


module.exports = router;

