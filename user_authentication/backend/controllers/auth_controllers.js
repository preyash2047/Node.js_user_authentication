const User_auth_Model = require('../models/user_auth_model')
const bcrypt = require('bcrypt');
const { isNull } = require('lodash');
const jwt = require('jsonwebtoken');


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
    try {
        const salt = await bcrypt.genSalt(10);
        const temp_data = await User_auth_Model.findAll({
            attributes : ["email"],
            where :{"email":data.email}
        });
        if (temp_data.length == 0){
            console.log("inif condition"); 
            // now we set user password to hashed password
            data.password = await bcrypt.hash(data.password, salt);            
            const users = await User_auth_Model.create(data);
            res.status(200).json({
                success: true,
                message: "user created."
            });
        } else{
            res.status(500).json({
                success: false, 
                message: error
            }); 
        }
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}
exports.putUser_auth = async(req, res, next) => {
    let req_data = req.body;
    console.log(req_data);
    try {
        async function checkPassword() {
            const db_data = await User_auth_Model.findOne({
                where :{"id":req_data.id}
            });
            const match = await bcrypt.compare(req_data.old_password, db_data.password);
        
            if(match) {
                const salt = await bcrypt.genSalt(10);
                req_data.password = await bcrypt.hash(req_data.password, salt);
                const users = await User_auth_Model.update({"id":req_data.id, "password":req_data.password}, {
                    where: {id: req_data['id']}
                });
                res.status(200).json({
                    success: true,
                    message: "Password Updated"
                });
            } else{
                res.status(500).json({
                    success: false,
                    message: "Old Password is Incorrect"
                });
            }
        }
        checkPassword();


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

//Login
exports.postLogin = async(req, res, next) => {
    let req_data = req.body;
    console.log(req_data);
    try {
        async function checkLogin() {
            const db_data = await User_auth_Model.findAll({
                where: {"email":req_data.email}
            });
            console.log(db_data);
            console.log(req_data.password, db_data[0].password);
            const match = await bcrypt.compare(req_data.password, db_data[0].password);
            
            if(match) {

                //return status
                res.status(200).json({
                    success: true,
                    message: "Login Success"
                });
            } else{
                res.status(500).json({
                    success: false,
                    message: "Invalid Login Credintial"
                });
            }
        }
        checkLogin();
    } catch (error) {   
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.postLogout = async(req, res, next) => {
    let req_data = req.body;
    //console.log(req_data);
    try {
        async function checkLogin() {
            const db_data = await User_auth_Model.findOne({
                where :{"email":req_data.email}
            });
            const match = await bcrypt.compare(req_data.password, db_data.password);
        
            if(match) {
                //JWT code

                //return status
                res.status(200).json({
                    success: true,
                    message: "Login Success"
                });
            } else{
                res.status(500).json({
                    success: false,
                    message: "Invalid Login Credintial"
                });
            }
        }
        checkPassword();
    } catch (error) {   
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}