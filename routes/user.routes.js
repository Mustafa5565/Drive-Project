const express = require('express')
 const router = express.Router();
 const { body, validationResult } = require('express-validator');

 router.get('/register', (req, res) =>{
    res.render('register')
 })
 router.post('/register',

   body('email').trim().isEmail().isLength({min:13}),
   body('username').trim().isLength({min:3}),
 //  body('password').trim().isLength({min:5}),
  body('password')
  .trim()
  .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
  .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
  .matches(/[a-z]/).withMessage('Password must contain a lowercase letter')
  .matches(/[0-9]/).withMessage('Password must contain a number')
  .matches(/[@$!%*?&]/).withMessage('Password must contain a special character'),


   (req,res)=>{

      const error = validationResult(req)
      if(!error.isEmpty()){
         return res.status(400).json({
            error:error.array(),
            message:'invalid data'
         })
      }
   //console.log(req.body)
   res.send(req.body)
 })

 module.exports = router
