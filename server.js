const dotenv = require("dotenv");
const express = require("express");
dotenv.config()

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "public"));

//mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ckdd9.mongodb.net/${process.env.DB_NAME}`, {useUnifiedTopology: true, useNewUrlParser: true});

app.get('/', (req, res) => [
    res.render('index')
])

app.get('/about', (req, res) => [
    res.render('about')
])

app.get('/contact', (req, res) => [
    res.render('contact')
])

app.get('/Feedback', (req, res) => [
    res.render('feedback')
])
app.get('/finance', (req, res) => [
    res.render('finance')
])

app.get('/entertainment', (req, res) => [
    res.render('entertainment')
])

app.get('/dailyaffairs', (req, res) => [
    res.render('dailyaffairs')
])

app.get('/international', (req, res) => [
    res.render('international')
])

app.get('/sports', (req, res) => [
    res.render('sports')
])

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started successfully");
});
