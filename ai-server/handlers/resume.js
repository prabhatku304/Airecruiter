
const db = require('../models')
const ResumeParser = require('resume-parser')
const _ = require('lodash')
const { spawn } = require('child_process')

exports.ResumeUpload = async (req,res,next)=>{

    try{
        let url =''
        if(req.hostname == 'localhost'){
             url =  req.protocol + '://' + req.hostname + ':5000/' + req.file.filename;
        }else{
            url = req.protocol + '://' + req.hostname + '/' + req.file.filename
        }
       
         let user = await db.User.findById(req.params.id)
         
         
         if(user){
            let resumeParser = await ResumeParser.parseResumeUrl(url)
            console.log(resumeParser)
            // let experience = _.split(resumeParser.experience, '\n')
            let userProfile = await db.UserProfile.findById(user.profile)
            if(userProfile){
                userProfile.experience = resumeParser.experience
                userProfile.skills =  resumeParser.skills
                await userProfile.save()
            }
            else{
                let profile = await db.UserProfile.create({experience: resumeParser.experience,
                                                skills: resumeParser.skills})
                profile.user = req.params.id;
                user.profile = profile.id
                await profile.save()
            }
            
            console.log(userProfile)
             user.resume = url
             
             await user.save();
            
             return res.send(url)
         }
         else{
             return next({
                 status: 404,
                 message: 'user does not exist'
             })
         }
        
    }
    catch(err){
        return next({
            status: 400,
            error: err.message || 'something went wrong'
        })
    }
}

exports.VideoUpload = async (req,res, next)=>{

                try{
                         let user = await db.User.findById(req.params.id)
                         if(user){
                             
                             let url = ''
                             if(req.hostname == 'localhost'){
                                 url = req.protocol + '://' + req.hostname + ':5000/' + req.file.filename
                             }else{
                                 url = req.protocol + '://' + req.hostname + '/' + req.file.filename
                             }
                            //  let childProcess = await spawn('python', ['ml/facial/predict_expression.py', ])
                             user.video = url;
                             await user.save()
                             res.send(url)

                         }else{
                             return next({
                                 status: 404,
                                 message: 'user does not exist'
                             })
                         }
                }catch(err){
                    return next({
                        status: 400,
                        message: err.message
                    })
                }
            }



exports.AudioUpload = async (req,res, next)=>{

    try{
                let user = await db.User.findById(req.params.id)
                console.log(req.file)
                if(user){
                    let url = ''
                    if(req.hostname == 'localhost'){
                        url = req.protocol + '://' + req.hostname + ':5000/' + req.file.filename
                    }else{
                        url = req.protocol + '://' + req.hostname + '/' + req.file.filename
                    }
                    user.audio = url;
                    await user.save()
                    res.send(url)

                }else{
                    return next({
                        status: 404,
                        message: 'user does not exist'
                    })
                }
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}