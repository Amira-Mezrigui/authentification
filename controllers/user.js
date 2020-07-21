const user = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
    signup: (req, res, next) => {
        bcrypt.hash(req.body.password, 10).then(
          (hash) => {
            const User = new user({
              name : req.body.name,
              email: req.body.email,
              password: hash
            });
            User.save().then(
              () => {
                res.status(201).json({
                  message: 'User added successfully!'
                });
              }
            ).catch(
              (error) => {
                res.status(500).json({
                  error: error
                });
              }
            );
          }
        );
      },
    

    login : (req,res,next) => {
        console.log(req.body)
        user.findOne({email : req.body.email})
        .then(user => {
            if(!user){
                   return res.status(404).json({ message: 'user not found'})
                
            }
        bcrypt.compare(req.body.password, user.password)
        .then( (valid) =>{
           if(!valid) {
               return res.json({message: 'password incorrect'});
           }
           //token
           const token = jwt.sign(
            { userId: user._id },
            'SECRET_TOKEN',
            { expiresIn: '24h' });

           res.json({
               userId: user._id,
               token: token,
               name: user.name,
               message:'welcome'
           }
           ).catch((err) => res.json({err : err})); 
        });
        }
        ).catch((err) => res.json({err: err}));
        
    }
    
};
 module.exports = userController;
