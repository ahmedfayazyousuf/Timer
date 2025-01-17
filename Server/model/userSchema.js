const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    phone: {
        type: Number,
        required: true
    },
})


//generating unique token for every user
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token : token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
} 



const User = mongoose.model('USER', userSchema);
module.exports = User;