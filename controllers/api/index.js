const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRouts = require('./commentRoutes')
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment',commentRouts)
module.exports = router;
