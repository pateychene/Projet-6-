const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require ('fs');


const saucesRoutes = require ('./routes/sauces');
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
app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: true })); 


// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;

