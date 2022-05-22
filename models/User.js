const {Schema, model} = require('mongoose')

const User = new Schema({
    username: {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    role: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User);