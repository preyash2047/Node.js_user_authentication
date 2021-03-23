const ItemModel = require('../models/item_model')

//item
exports.getItem = async (req, res, next)=>{
    const data = req.body.id;

    try {
        const ItemData = await ItemModel.findOne({where: {id: data}});
        res.status(200).json({
            success: true, 
            data: ItemData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }    
}
exports.postItem = async (req, res, next) => {
    const data = req.body;
    console.log(data);
    try {
        const item = await ItemModel.create(data);
        console.log(item)
        res.status(200).json({
            success: true,
            message: "item created."
        });

    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}
exports.putItem = async(req, res, next) => {
    const data = req.body;
    // console.log(data);
    try {
        const item = await ItemModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "item Updated"
        });

    } catch (error) {   
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}
exports.deleteItem = async(req, res, next) => {
    const data = req.body;
    // console.log(data);
    try {
        const home = await ItemModel.destroy( {
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