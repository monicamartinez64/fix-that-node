const Taco = require("../config/data");

module.exports = {
  index,
  // Add the rest of the functions here!
  create,
};

function index(req, res) {
  res.render("index", { tacos: Taco.getAll() });
}

function create(req, res) {
  Taco.create(req.body);
  res.redirect("/");
}
// (...and here!)
