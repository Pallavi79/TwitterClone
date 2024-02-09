const express = require('express');
const CreateTweet = require('../../controllers/tweet-controller');
const toggleLike = require('../../controllers/like-controller')
const router = express.Router();

router.post('/tweets',CreateTweet);

router.post('/likes/toggle',toggleLike);

module.exports = router;

