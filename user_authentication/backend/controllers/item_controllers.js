const BlogModel = require('../models/blog_model')

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