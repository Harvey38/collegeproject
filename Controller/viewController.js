module.exports.showform = (req, res) => {
  res.status(201).render("form.pug");
};
module.exports.login = (req, res) => {
  res.status(201).render("login.pug");
};
module.exports.profile = (req, res) => {
  res.status(201).render("profile.pug");
};
