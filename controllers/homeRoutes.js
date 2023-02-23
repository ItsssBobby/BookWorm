const router = require('express').Router();
const { Book, Comment, User } = require('../models');

// get all Books for homepage
router.get('/', async (req, res) => {
  try {
    const BookData = await Book.findAll({
      include: [User],
    });

    const Books = BookData.map((Book) => Book.get({ plain: true }));

    res.render('all-Books', { Books });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single Book
router.get('/Book/:id', async (req, res) => {
  try {
    const BookData = await Book.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (BookData) {
      const Book = BookData.get({ plain: true });

      res.render('single-Book', { Book });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', (req, res) => {

  res.render('profile', {loggedIn: true});
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
