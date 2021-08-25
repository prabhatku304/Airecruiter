const mongoose =  require('mongoose');
const bcrypt = require('bcrypt')

const userSchema =  new mongoose.Schema({
        username:{
            type: String,
            unique: true,
            required: true
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        resume:{
            type:String,
            default:''
        },
        is_admin:{
            type: Boolean,
            default: false
        },
        profile:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserProfile'
        },
        video:{
            type:String,
            default:''
        },
        company: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
        }],
        user_score:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'UserScore'
            }
        ],
        audio:{
            type:String,
            default:''
        }
})

userSchema.pre('save', async function(next){
        try{
            if(!this.isModified('password')){
                return next();
            }
            let hashPassword = await bcrypt.hash(this.password, 10)
            this.password = hashPassword
            return next()
        }catch(err){
            return next({
                status:500,
                message: err.message
            })
        }
})

userSchema.methods.Compare = async function(userPassword,next){
            try{
                    let isMatch =  await bcrypt.compare( userPassword, this.password)
                    return isMatch
            }catch(err){
                return next(err)
            }
        
}
const User = mongoose.model('User', userSchema)
module.exports = User