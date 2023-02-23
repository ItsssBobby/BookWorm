const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const bookRoutes = require('./bookRoutes.js');
const commentRoutes = require('./commentRoutes.js');

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/comment', commentRoutes);

module.exports = router;