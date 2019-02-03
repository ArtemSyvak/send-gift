const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// add new user to db
exports.create_user = (req, res, next)=> {
    console.log(req);
    User.find({email:req.body.params.email})
        .exec()
        .then(user => {
            if(user.length >= 1){
                return res.status(409).json({
                    message: 'Mail Exists'
                })
            }
            else{
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.params.password, salt, (err,hash) => {
                        if(err){
                            return res.status(500).json({
                                error:err
                            });
                        }else{
                            const user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                firstname: req.body.params.firstname,
                                lastname: req.body.params.lastname,
                                email: req.body.params.email,
                                password: hash
                            });
                            user.save()
                                .then(result=>{
                                    console.log(result);
                                    res.status(201).json({
                                        message: 'User created',
                                        user: user
                                    })
                                })
                                .catch(err=>{
                                    console.log(err.message);
                                    res.status(500).json({
                                        error: err
                                    });
                                });
                        }
                    });
                });
            }
        })
};

// init sign in
exports.user_login = (req, res, next) => {
    console.log(req);
    User.find({email: req.body.params.email})
        .exec()
        .then(user => {
            if(user.length < 1){
                return res.status(401).json({
                    message: 'Auth failed :c1'
                });
            }
            bcrypt.compare(req.body.params.password, user[0].password, (err, result)=>{
                if(err){
                    return res.status(401).json({
                        message: 'Auth failed :c2'
                    });
                }
                if(result){
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: '1h'
                        }
                    );
                    res.set('Authorization', `Bearer ${token}`);
                    const responseUser ={
                        _id: user[0]._id,
                        email: user[0].email,
                        firstname: user[0].firstname,
                        lastname: user[0].lastname

                    }
                    return res.status(200).json({
                        message: 'Auth successful !',
                        token: token,
                        user: responseUser
                    })
                }
                res.status(401).json({
                    message: 'Auth failed :c3'
                });
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

//get all users from db
exports.get_users = (req, res, next) => {;
    User.find()
        .select('_id email firstname lastname')
        .exec()
        .then(userList => {
            const response = {
                count: userList.length,
                users: userList.map(user =>{
                    return{
                        _id: user._id,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => res.status(500).json({error:err}))
};

// remove user from db
exports.delete_user = (req,res,next) => {
    User.remove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted!'
            })
        })
        .catch(err=>{
            res.status(500).json({
                error: err
            })
        })
};