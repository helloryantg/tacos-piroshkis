var express = require('express');
var router = express.Router();
var tacos = require('../controllers/tacosController');

// GET /tacos - returns all tacos
router.get('/tacos', tacos.index);
// GET /tacos/new - returns the creation form
router.get('/tacos/new', tacos.new);
// POST /tacos - adds the form data to the DB
router.post('/tacos', tacos.create);
// GET /tacos/:id - returns one taco
router.get('/tacos/:id', tacos.show);
// GET /tacos/:id/edit - returns the update form
router.get('/tacos/:id/edit', tacos.edit);
// PUT /tacos:id - updates the selected taco
router.put('/tacos/:id', tacos.update);
// DELETE /tacos:id - deletes the selected taco
router.delete('/tacos/:id', tacos.destroy);

module.exports = router;