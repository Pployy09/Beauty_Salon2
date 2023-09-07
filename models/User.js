const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please provide lastname']
    },
    nickname: {
        type: String,
        required: [true, 'Please provide nickname']
    },
    phonenum: {
        type: String,
        required: [true, 'Please provide phonenum']
    },
    username: {
        type: String,
        required: [true, 'Please provide username'],
         unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    role: {
        type: String,
        default: 'user'
    }
})

UserSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash
        next()
    }).catch(error => {
        console.error(error)
    })
    
})

const User = mongoose.model('User', UserSchema)
module.exports = User