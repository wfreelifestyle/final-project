var express = require('express');
var router = express.Router();

const mylifeController = require('../controllers/mylifeController');
/* GET home page. */
router.get('/mylife', mylifeController.getMylife);

// // DELETE
// router.get('/mylife/delete/:id', mylifeController.deleteMylifeById);

module.exports = router;