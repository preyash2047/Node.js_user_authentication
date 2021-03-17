const BlogModel = require('../models/blog_model')
const User_auth_Model = require('../models/user_auth_model')
const bcrypt = require('bcrypt')

//user
exports.getUser_auth = async (req, res, next)=>{
    const data = req.body.id;
    try {
        const User_authData = await User_auth_Model.findOne({where: {id: data}});
        console.log(User_authData);
        //().then((user) 
        res.status(200).json({
            success: true, 
            data: User_authData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }    
}
exports.postUser_auth = async (req, res, next) => {
    let data = req.body;
    console.log(data);
    console.log(data.username);
    console.log(data.password);
    // generate salt to hash password
    try {        
        const salt = await bcrypt.genSalt(10);

        // now we set user password to hashed password
        data.password = await bcrypt.hash(data.password, salt);
        console.log(data);
        const users = await User_auth_Model.create(data);
        res.status(200).json({
            success: true,
            message: "user created."
        });

    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}
exports.putUser_auth = async(req, res, next) => {
    const data = req.body;
    // console.log(data);
    try {
        const users = await User_auth_Model.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "users Updated"
        });

    } catch (error) {   
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}
exports.deleteUser_auth = async(req, res, next) => {
    const data = req.body;
    // console.log(data);
    try {
        const home = await User_auth_Model.destroy( {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "items Deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}


//blog
exports.getBlog = async (req, res, next)=>{
    const data = req.body.id;

    try {
        const BlogData = await BlogModel.findOne({where: {id: data}});
        res.status(200).json({
            success: true, 
            data: BlogData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }    
}
exports.postBlog = async (req, res, next) => {
    const data = req.body;
    console.log(data);
    try {
        const blog = await BlogModel.create(data);
        console.log(blog)
        res.status(200).json({
            success: true,
            message: "blog created."
        });

    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}
exports.putBlog = async(req, res, next) => {
    const data = req.body;
    // console.log(data);
    try {
        const blog = await BlogModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "blog Updated"
        });

    } catch (error) {   
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}
exports.deleteBlog = async(req, res, next) => {
    const data = req.body;
    // console.log(data);
    try {
        const home = await BlogModel.destroy( {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "items Deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}