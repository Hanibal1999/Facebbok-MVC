
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feedRoutes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb+srv://hanibalmulugeta:Jositey2011@cluster0.8f7dwie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('My MongoDB is connected'))
    .catch(err => console.error(err));

app.use('/feed',feedRoutes);
app.listen(4000, () => console.log('My server is running on port 4000'));