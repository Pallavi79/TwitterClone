const express = require('express');
const CreateTweet = require('../../controllers/tweet-controller');

const router = express.Router();

router.post('/tweets',CreateTweet);

module.exports = router;

