// App.js fait appel aux différentes fonctions implémentées dans l'APi : Accès aux images, aux route User, aux route Sauce

// import des modules npm - Ajout des plugins externes

const express = require('express');// Importation d'express => Framework basé sur node.js

// On importe mongoose pour pouvoir utiliser la base de données
const mongoose = require('mongoose');// Plugin Mongoose pour se connecter à la data base Mongo Db

// Pour gérer la demande POST provenant de l'application front-end, nous devrons être capables d'extraire l'objet JSON de la demande, on importe donc body-parser
const bodyParser = require('body-parser');// Permet d'extraire l'objet JSON des requêtes POST

// On donne accès au chemin de notre système de fichier
const path = require('path');// Plugin qui sert dans l'upload des images et permet de travailler avec les répertoires et chemin de fichier

// utilisation du module 'helmet' pour la sécurité en protégeant l'application de certaines vulnérabilités
const helmet = require('helmet');

const session = require('cookie-session');

//empeche la mise en cache dans le navigateur
const nocache = require('nocache');

const fs = require ('fs');

// Déclaration des routes
// On importe la route dédiée aux sauces
const saucesRoutes = require ('./routes/sauces');
// On importe la route dédiée aux utilisateurs
const userRoutes = require('./routes/user');


//Connexion avec MongoDB (Base de donnees)
mongoose.connect('mongodb+srv://tata:B7RGbtEbLlXXfK26@go-fullstack.9esbxra.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
 
// Creation application Express  
const app = express();

app.use(express.json());

// Transforme les données arrivant de la requête POST en un objet JSON facilement exploitable
app.use(bodyParser.json());

// Sécuriser Express en définissant divers en-têtes HTTP 
app.use(helmet());
// Desactive la mise en cache du navigateur
app.use(nocache());


// CORS
// Middleware Header pour contourner les erreurs en débloquant certains systèmes de sécurité CORS, afin que tout le monde puisse faire des requetes depuis son navigateur
app.use((req, res, next) => {
 // on indique que les ressources peuvent être partagées depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Origin', '*');
// on indique les entêtes qui seront utilisées après la pré-vérification cross-origin afin de donner l'autorisation
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
// on indique les méthodes autorisées pour les requêtes HTTP
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Options pour sécuriser les cookies
const expiryDate = new Date(Date.now() + 3600000); // 1 heure (60 * 60 * 1000)
app.use(session({
  name: 'session',
  secret: process.env.SEC_SES,
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'http://localhost:3000',
    expires: expiryDate
  }
}));


// Midleware qui permet de charger les fichiers qui sont dans le repertoire images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes pour la gestion de toute les ressources de l'API 

//routes dédiées aux sauces
app.use('/api/sauces', saucesRoutes);

//routes dédiées aux utilisateurs
app.use('/api/auth', userRoutes);

// Export de l'application express pour déclaration dans server.js
module.exports = app;

