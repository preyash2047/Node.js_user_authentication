const express = require('express');

const itemsController = require('../controllers/blog_controllers');

const router = express.Router();

// For Blog Content
router.get("/blog", itemsController.getBlog );
router.post("/blog", itemsController.postBlog);
router.put("/blog", itemsController.putBlog);
router.delete("/blog", itemsController.deleteBlog); 

// For user Content
router.get("/user", itemsController.getUser_auth );
router.post("/user", itemsController.postUser_auth);
router.put("/user", itemsController.putUser_auth);
router.delete("/user", itemsController.deleteBlog); 

module.exports = router;