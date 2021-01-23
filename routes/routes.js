/**
 * @file File with routes for *****
 * @author Daniela Cordoba <dacorac43@gmail.com>
 */

 //Load modules
 const express = require('express');
 //Load project files
 const controller = require('../controllers/controller');

 const router = express.Router();

 //Endpoints
 /**
  * Enpoint to **********
  */
router.get('/items', controller.getItems);
/**
 * Endpoint to test
 */
router.get('/items/:id', controller.getItemById)

/**
 * Export routes 
 * @module routes/api
 */
module.exports = router;