const passwordValidator = require('password-validator')

const passwordSchema = new passwordValidator();

passwordSchema
//.is().min(8)
//.has().uppercase()
.has().lowercase()
//.has().digits()
//.has().not().spaces()
//.is().not().oneOf(['12345678','password','password123']) //not allowed


module.exports = passwordSchema ;