const Taco = require("../config/data");
const { deleteOne } = require("../config/data");

module.exports = {
  index,
  // Add the rest of the functions here!
  create,
  delete: deleteTaco,
  show,
  update,
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

function show(req, res) {
  res.render('show', {taco: Taco.getOne(req.params.id), idx: req.params.id})
  
}

function update(req, res) {
  Taco.update(req.params.id, req.body);
  res.redirect('/');
}

// (...and here!)


