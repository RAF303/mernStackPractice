const express = require('express');
const router = express.Router();

// @route GET api/posts/test
// @dsc test post route
// @acsess Public
router.get('/test', (req,res) => res.json({msg:"Users works"})

);

module.exports = router;