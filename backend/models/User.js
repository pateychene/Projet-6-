/*const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const sanitizerPlugin = require('mongoose-sanitizer-plugin');

const userSchema = mongoose.Schema({
    email: { 
        type:String,
        unique:true, 
        required: [true,"Veuillez écire une adresse mail"],
        match : [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Veuillez renseigner une adresse mail valide"]
    },
    password: { 
        type: String,
         required:[true, "Veuillez entrer un mot de passe"]
    } 
})

userSchema.plugin(uniqueValidator);
userSchema.plugin(sanitizerPlugin);


module.exports = mongoose.model ('User', userSchema); */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

