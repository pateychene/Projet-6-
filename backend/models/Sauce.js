// On importe mongoose
const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  // UserId du createur
  userId: {
    type: String,
    required: true,
  },
  // Nom de la sauce
  name: {
    type: String,
    required: true,
    validation : nameValidator
  },
  // Créateur de la sauce
  manufacturer: {
    type: String,
    required: true,
  },
  // description de la sauce
  description: {
    type: String,
    required: true,
  },
  // Ingredients qui pimentent la sauce
  mainPepper: {
    type: String,
    required: true,
  },
  // Adresse de l'image de presentation de la sauce
  imageUrl: {
    type: String,
    required: true
  },
  // Force le piquant de la sauce
  heat: {
    type: Number,
    required: true
  },
  // nombre de Like reçu
  likes: {
    type: Number,
  },
  // nombre de dislike reçu
  dislikes: {
    type: Number,
  },
  // Utilisateurs qui Like la sauce
  usersLiked: {
    type: [String]
  },
  // Utilisateur qui DisLike la sauce
  usersDisliked: {
    type: [String]
  },
})

// On exporte ce shéma de données, on va donc pouvoir utiliser ce modèle pour intéragir avec l'application
module.exports = mongoose.model('Sauce',sauceSchema);