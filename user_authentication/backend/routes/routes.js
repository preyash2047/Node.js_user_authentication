const express = require('express');

const itemsController = require('../controllers/blog_controllers');
const authController = require('../controllers/auth_controllers');

const router = express.Router();

// For Blog Content
router.get("/blog", itemsController.getBlog );
router.post("/blog", itemsController.postBlog);
router.put("/blog", itemsController.putBlog);
router.delete("/blog", itemsController.deleteBlog); 

// For user Content
router.get("/user", authController.getUser_auth );
router.post("/user", authController.postUser_auth);
router.put("/user", authController.putUser_auth);
router.delete("/user", authController.deleteUser_auth); 

module.exports = router;