const passwordSchema = require('../models/Password');
const { validate } = require('../models/User');

module.exports = (req, res, next) => {
    if(! passwordSchema.validate(req.body.password)){ 
        // si le mot de passe n'est pas conforme au schéma défini
    res.writeHead(400, '{"message" : "Mot de passe doit contenir au moins 8 caractère, avec un chiffre, une. majuscule, minuscule et sans espace"}', {'content-type' : 'application/json'});

    res.end('Format de mot de passe incorrect')
    }else {
        next();
    }
}