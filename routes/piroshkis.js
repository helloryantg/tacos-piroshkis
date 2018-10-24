var express = require('express');
var router = express.Router();
var piroshkis = require('../controllers/piroshkisController');

// GET /piroshkis - returns all piroshkis
router.get('/piroshkis', piroshkis.index);
// GET /piroshkis/new - returns the creation form
router.get('/piroshkis/new', piroshkis.new);
// POST /piroshkis - adds the form data to the DB
router.post('/piroshkis', piroshkis.create);
// GET /piroshkis/:id - returns one piroshki
router.get('/piroshkis/:id', piroshkis.show);
// GET /piroshkis/:id/edit - returns the update form
router.get('/piroshkis/:id/edit', piroshkis.edit);
// PUT /piroshkis:id - updates the selected piroshki
router.put('/piroshkis/:id', piroshkis.update);
// DELETE /piroshkis:id - deletes the selected piroshki
router.delete('/piroshkis/:id', piroshkis.destroy);

module.exports = router;