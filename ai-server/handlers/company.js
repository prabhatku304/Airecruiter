require('dotenv').load
const db = require('../models')
const jwt = require('jsonwebtoken')

exports.CompanyRegister = async (req,res,next)=>{

          try{
              let tempUser = await db.User.findOne({email: req.body.email})

              if(tempUser){
                  console.log(tempUser)
                  return next({
                      status: 404,
                      message: 'User already exist'
                  })
              }
              let user = await db.User.create(req.body)
              console.log(user)
              let company = await db.Company.create({company_name:req.body.company_name, company_user: user._id, url: req.body.url, description: req.body.description})
              let test = await db.Test.create({company:company.id})
              company.test = test.id
              console.log(test)
              await test.save()

              user.is_admin = true
              user.company = company._id

              let {id, username , email, is_admin} = user
              let company_id = company._id
              let token = jwt.sign({
                  id,
                  email,
                  username,
                  company_id,
                  is_admin
              }, process.env.SECRET_KEY)
              console.log(token)
             await user.save()
             await company.save()
             return res.status(200).json({
                 id,
                 email,
                 token,
                 username,
                 is_admin,
                 company_id
             })
          }catch(err){
              return next({
                  status:402,
                  message: err.message
              })
          }
}

exports.CompanyLogin =  async (req,res ,next)=>{
                try{
                    let user =  await db.User.findOne({email: req.body.email})
                    
                    if(user && user.is_admin){
                        let isMatch = await user.Compare(req.body.password)
                        let {id, username, email, is_admin} = user
                        let company = await db.Company.findOne({company_user:id})
                        let company_id = company._id;
                        console.log(company)
                        if(isMatch){
                            let token = jwt.sign({
                                username,
                                email,
                                id,
                                is_admin,
                                company_id
                                
                            },process.env.SECRET_KEY)
                            return res.status(200).json({
                                username,
                                email,
                                token,
                                id,
                                is_admin,
                                company_id

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


exports.UploadQuestion = async (req,res, next)=>{

    try{
        let company = await db.Company.findOne({company_user: req.params.id})
        if(company){
            let test = await db.Test.findOne({company: company.id})
            let data = {
                question: req.body.question,
                options: req.body.answer,
                correct: req.body.correct
            }
            await test.mcq.push(data)
            await test.save()
            return res.send(data)

        }else{
            return next({
                status: 404,
                message: 'company does not exist'
            })
        }
    }
    catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}

exports.CompanyInterviewQuestion = async (req,res, next)=>{

    try{
        let company = await db.Company.findById(req.params.c_id)
        if(company){
            let test = await db.Test.findOne({company: req.params.c_id})

            res.send(test.interview)
        }else{
            return next({
                status: 404,
                message: 'comapny does not exist'
            })
        }
        
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}

exports.UserCompanyTest = async (req, res, next)=>{

    try{

        let user = await db.User.findById(req.params.id)
        let company = await db.Company.findById(req.body.c_id)
        let userScore = await db.UserScore.create({
            company: company._id,
            user: user._id
        })
        console.log(user)
        console.log(company)
        console.log(company.user_apply.includes(user._id))
        if(user.company.includes(req.body.c_id))
        {
            console.log(user._id)
            return next({
                status: 404,
                message: "you are already registered for this compnay"
            })
        }else{
            await user.company.push(company._id);
             await user.user_score.push(userScore._id)
             user.save()
            await company.user_apply.push(req.params.id);
           company.save()
           res.send(user)
        }
        
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}

exports.UserRegisteredCompany = async (req,res, next)=>{

    try{
          let user =  await db.User.findById(req.params.id);
          let company={}
          if(user){
             await user.populate('company')
                                    .execPopulate((err, result)=>{
                                        company = result
                                        console.log(result)
                                        res.send(result.company)
                                    })
            
              
            
          }else{
              return next({
                  status: 400,
                  message: "user does not exist"
              })
          }
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}

