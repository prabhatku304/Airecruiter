const mongoose = require('mongoose')

const testShema = new mongoose.Schema({

            interview:[{
                question: String,
                answer: String,
                score: Number,
                time: Number
            }],
            mcq:[{
                question: String,
                options: [],
                correct: String
                
            }],
            company:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Company'
            }
})

const Test = mongoose.model('Test', testShema)
module.exports = Test