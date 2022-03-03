const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    companyname:{
        type: String,
    },
    industrysector:{
        type:String,
    },
    website:{
        type:String
    },emailid:{
        type:String
    },pocname:{
        type:String
    },designation:{
        type:String
    },mobileno:{
        type:String
    },jpDesignation:{
        type:String
    },jobDescription:{
        type:String
    },placeofPosting:{
        type:String
    },btech:{
        type:Boolean
    },selectedBtech:{
        type:[String]
    },dualDegree:{
        type:Boolean
    },selectedDualDegree:{
        type:[String]
    },skills:{
        type:[String]
    },msc3:{
        type:Boolean
    },selectedMsc3:{
        type:[String]
    },mtech:{
        type:Boolean
    },selectedMtech:{
        type:[String]
    },mba:{
        type:Boolean
    },selectedMba:{
        type:[String]
    },msc2:{
        type:Boolean
    },selectedMsc2:{
        type:[String]
    },phd:{
        type:Boolean
    },selectedPhd:{
        type:[String]
    },eligibilityCriteria:{
        type:Number
    },resumeShortlisting:{
        type:Boolean
    },typeoftest:{
        type:[String]
    },otherQrounds:{
        type:[String]
    },ttlrounds:{
        type:Number
    },ttloffers:{
        type:Number
    },ctc:{
        type:Number
    },ctcBreakup:{
        type:String
    },bondDetails:{
        type:String
    },user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hr'
    }
    
},{timestamps:true});

module.exports = mongoose.model('Intern', internSchema);