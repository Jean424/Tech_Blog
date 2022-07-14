const router = require('express').Router();
const { User, Blog} = require('../models');
const withAuth = require('../utils/auth');

// GET all Blogs for homepage
router.get('/', async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => {
    res.json(err);
})
const loggedIn = req.session.user ? true : false;
const blogs = blogData.map((blog) => blog.get({ plain: true }));
res.render("home", { blogs, loggedIn, username: req.session.user?.username });
});

// signup
router.get("/signup", (req, res) => {

if (req.session.user) {
    return res.redirect("/");
};

res.render("signup");
});

//loads login 
router.get("/login", (req, res) => {
  if (req.session.user) {
      return res.redirect("/");
  }
  res.render("login");
});

//loads profile
router.get("/profile", (req, res) => {
  if (!req.session.user) {
      return res.redirect("/login")
  }
  User.findByPk(req.session.user.id, {
      include: { all: true, nested: true }
  }).then(userData => {
      const hbsData = userData.get({ plain: true })
      hbsData.loggedIn = req.session.user ? true : false
      res.render("profile", hbsData)
  });
});

module.exports = router;