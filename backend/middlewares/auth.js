// Middleware qui protégera les routes sélectionnées et vérifier que l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes.

const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
    // On récupère le token dans le header de la requête autorisation
       const token = req.headers.authorization.split(' ')[1];
        // On vérifie le token décodé avec la clé secrète initiéé avec la création du token encodé initialement (Cf Controller user), les clés doivent correspondre
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       // On vérifie que le userId envoyé avec la requête correspond au userId encodé dans le token
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};