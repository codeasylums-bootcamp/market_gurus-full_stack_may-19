const mongoose =require('mongoose');
const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,  // ObjectId separe
    name : {type: String,required: true},
    email : { type: String,required: true,unique: true},
    password : {type : String,required:true}
});

module.exports = mongoose.model('User',userSchema);