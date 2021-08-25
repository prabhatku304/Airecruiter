const express = require('express');
const db = require('../models');
const router = express.Router();
const {CompanyLogin, CompanyRegister, UploadQuestion} = require('../handlers/company')
const {AplliedCandidate} = require('../handlers/leaderboard');
const {CandidateSelectionStatus} = require('../handlers/score')

router.post('/company/register', CompanyRegister)
router.post('/company/login', CompanyLogin);
router.post('/company/:id/question/upload', UploadQuestion )
router.get('/company/user/applied-list/:c_id', AplliedCandidate )
router.post('/company/candidate/selection', CandidateSelectionStatus)
router.get('/company' , async (req,res, next)=>{
    try{
        let company = await db.Company.find({})
        res.send(company)
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
} )

router.get('/company', async (req,res) => {
    try{
        let company = await db.Company.find({})
        res.send(company)
    }catch(err){
        console.log(err)
    }
})

router.get('/company/test', async (req,res) => {
    try{
        let company = await db.Test.find({})
        res.send(company)
    }catch(err){
        console.log(err)
    }
})

module.exports = router