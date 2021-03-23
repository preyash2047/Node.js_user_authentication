const express = require('express');

const itemsController = require('../controllers/item_controllers');
const authController = require('../controllers/auth_controllers');

const router = express.Router();

// For item Content
router.get("/item", itemsController.getItem );
router.post("/item", itemsController.postItem);
router.put("/item", itemsController.putItem);
router.delete("/item", itemsController.deleteItem); 

// For user Content
router.get("/user", authController.getUser_auth );
router.post("/user", authController.postUser_auth);
router.put("/user", authController.putUser_auth);
router.delete("/user", authController.deleteUser_auth); 

module.exports = router;