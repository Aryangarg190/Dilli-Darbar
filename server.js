const dotenv = require("dotenv")
const express = require("express")
const mongoose = require('mongoose')
const newsAuth = require('./routes/news')
dotenv.config()

const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "public"))

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lq10c1l.mongodb.net/${process.env.DB_NAME}`, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to Database'))

app.use('/', newsAuth)

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started successfully");
});
