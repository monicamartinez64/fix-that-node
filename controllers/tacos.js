const Taco = require("../config/data");
const { deleteOne } = require("../config/data");

module.exports = {
  index,
  // Add the rest of the functions here!
  create,
  delete: deleteTaco,
};

function index(req, res) {
  res.render("index", { tacos: Taco.getAll() });
}

function create(req, res) {
  Taco.create(req.body);
  res.redirect("/");
}

function deleteTaco(req, res) {
  Taco.deleteOne(req.params.idx);
  res.redirect('/');
}
// (...and here!)
