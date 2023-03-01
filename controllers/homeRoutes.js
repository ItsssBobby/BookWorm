const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth')
// get all Posts for homepage
router.get('/allposts', withAuth, async (req, res) => {
  try {
    const PostData = await Post.findAll({
      include: [User],
    });
    const Posts = PostData.map((Post) => Post.get({ plain: true }));
    res.render('all-posts', { Posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth,  async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/allposts');
      return;
    }
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single Post
router.get('/post/', async (req, res) => {
  try {
    const PostData = await Post.findByPk(req.params.id, {
      // include: [
      //   User,
      //   {
      //     model: Comment,
      //     include: [User],
      //   },
      // ],
    });

    if (PostData) {
      const post = PostData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile/', withAuth, async (req, res) => {

      res.render('profile', {loggedIn: true });

});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
