const passwordValidator = require('password-validator')

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8) // le mdp contient au moins 8 caracteres
.has().uppercase() // le mdp contient une majuscule 
.has().lowercase() // contient une minuscule
.has().digits() // est compose de lettres
.has().not().spaces() // et de chiffres 
.is().not().oneOf(['12345678','password','password123']) // liste de mots de passes trop simples non autorises


module.exports = passwordSchema ;