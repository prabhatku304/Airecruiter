require('dotenv').load
const db = require('../models');
const nodemailer = require('nodemailer');


const smtpNodemailer = nodemailer.createTransport({
     service: "Gmail",
     auth:{
         user: "prabhatkmr5789@gmail.com",
         pass: process.env.PASS
     }
})

exports.UserTestScore = async (req,res, next)=>{

    try{
        let userScore = await db.UserScore.findById(req.body.id)
        if(userScore){
            userScore.test_score = req.body.score;
            userScore.is_mcq_completed = true
            await userScore.save()
            return res.status(200).json({
                message: 'submitted'
            })
        }else{
            return next({
                status: 404,
                message: 'test does not exist'
            })
        }
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}
exports.UserTestStatus = async (req, res, next)=>{

    try{
        let userScore = await db.UserScore.findOne({
            $and:[{company: req.params.c_id}, {user: req.params.user_id}]
        })

        if(userScore){
            res.send(userScore)
        }else{
            return next({
                status: 404,
                message: "test does not found"
            })
        }
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}

exports.InterviewMailUrl = async (req, res, next)=>{

    try{
        console.log(req.body)
            let user = await db.User.findById(req.body.id)
            console.log(req.body)
            let url = `http://localhost:3000/user/interview/${user._id}/${req.body.c_id}`
            let mailOptions = {
                
                 to: 'prabhatku304@gmail.com',
                 subject: "InterView Test Link",
                 html: `<a href=${url}>Click The InterView Link</a>`
            }

            smtpNodemailer.sendMail(mailOptions, function(err, info){
                if(err){
                    console.log(err)
                   return res.status(400).json({
                        message: "err"
                    })
                }else{
                    console.log(info.response)
                    return res.status(200).json({
                        message: "done"
                    })
                }
            })
            console.log("done")
           
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}

exports.CandidateSelectionStatus = async (req,res,next)=>{
    try{
        let userScore = await db.UserScore.findOne({
                        $and:[{user:req.body.user_id},{company: req.body.c_id}]
                    })
        if(userScore){
            userScore.is_selected = req.body.status
            await userScore.save()
            let user = await db.User.findById(req.body.user_id)
            let text = ""
            if(req.body.status){
                text = "You have selected For HR Interview further Info will be sent"
            }else{
                text = "Thank You for applying You have not selected"
            }
            let mailOption = {
                to: user.email,
                subject: "Company Selection Status",
                html: text
            }

            smtpNodemailer.sendMail(mailOption, function(srr, info){
                if(err){
                    console.log(err)
                   return res.status(400).json({
                        message: "err"
                    })
                }else{
                    console.log(info.response)
                    return res.status(200).json({
                        message: "done"
                    })
                }
            })
        }else{
            return next({
                status: 404,
                message: "userscore does not exist"
            })
        }
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}