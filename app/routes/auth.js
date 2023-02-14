var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    //sign in
    app.get('/signin', authController.signin);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }
    ));

    //sign up
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
    ));

    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);

    // check if signed in - if not redirect to sign in page
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
};
