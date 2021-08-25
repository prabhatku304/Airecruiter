const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
        },
        is_selected:{
            type:Boolean,
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        interview_score:{
            type: String,
            default:0
            
        },
        test_score:{
            type:Number,
            default:0
        },
        resume_score:{
            type: String,
            default:0
        },
        speech_score:{
            type: String,
            default:0
        },
        is_interview_completed:{
            type: Boolean,
            default: false
        },
        is_mcq_completed:{
            type: Boolean,
            default: false
        }

})

const UserScore = mongoose.model('UserScore', userSchema)
module.exports = UserScore;