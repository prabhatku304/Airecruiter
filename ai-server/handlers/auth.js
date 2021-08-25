require('dotenv').load
const db = require('../models')
const jwt = require('jsonwebtoken')
const {spawn} = require('child_process')

exports.UserRegister = async (req,res,next)=>{

          try{
              let user = await db.User.create(req.body)
              let tempProfile = await db.UserProfile.create({user: user._id});
                    user.profile = tempProfile._id;
                    await tempProfile.save()
              let {id, username , email} = user
              let token = jwt.sign({
                  id,
                  email,
                  username
              }, process.env.SECRET_KEY)
              console.log(token)
             await user.save()
             return res.status(200).json({
                 id,
                 email,
                 token,
                 username
             })
          }catch(err){
              return next({
                  status:402,
                  message: err.message
              })
          }
}

exports.UserLogin =  async (req,res ,next)=>{
                try{
                    let user =  await db.User.findOne({email: req.body.email})
                    
                    if(user){
                        let isMatch = await user.Compare(req.body.password)
                        let {id, username, email} = user
                        if(isMatch){
                            let token = jwt.sign({
                                username,
                                email,
                                id,
                                
                            },process.env.SECRET_KEY)
                            return res.status(200).json({
                                username,
                                email,
                                token,
                                id
                            })
                        }
                        return next({
                            status: 404,
                            message: "wrong password"
                        })
                    }
                    return next(
                        {
                            status: 404,
                            message: 'user does not exist'
                        }
                    )
                }catch(err){
                    return next({
                        status: 404,
                        message: err.message
                    })

                }
}

exports.UserData = async (req,res,next)=>{

    try{
        let user = await db.User.findById(req.params.id)
        if(user){
            res.send(user.company)
        }else{
            return next({
                status: 404,
                message: 'user does not found'
            })
        }
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}


exports.UserProfile = async (req,res, next)=>{

            try{
                let userProfile = await db.UserProfile.findOne({user:req.params.id})
                userProfile.experience = req.body.experience;
                userProfile.skills = req.body.skills;
                userProfile.name = req.body.name;
                userProfile.languages = req.body.languages
                userProfile.email = req.body.email;
                userProfile.college = req.body.college
                userProfile.contact = req.body.contact
                if(req.body.skills || req.body.experience){
                    let process =  await spawn('python', ['ml/Resume_analyser/analyser.py' , userProfile.skills, userProfile.experience])
                    process.stdout.on('data', function(data){
                        console.log(data.toString())
                        userProfile.score = data.toString()
                        userProfile.save();
    
                        res.send(userProfile)
                    })
                    process.stderr.on('data', function(data){
                        console.log(data.toString())
                    })
                }else{
                    userProfile.save();
    
                    res.send(userProfile)
                }
               
               
                
            }catch(err){
                return next({
                    status: 404,
                    message: err.message
                })
            }
}

exports.UserProfileRequest = async (req,res,next)=>{
            try{
                let userProfile = await db.UserProfile.findOne({user:req.params.id})
                let user = await db.User.findById(req.params.id)
                console.log('hello')
                if(userProfile){
                    res.send(userProfile)
                }else{
                    let tempProfile = await db.UserProfile.create({user: user._id});
                    user.profile = tempProfile._id;
                    await tempProfile.save()
                    res.send(tempProfile)


                }
            }catch(err){
                return next({
                    status: 404,
                    message: err.message
                })
            }
}

