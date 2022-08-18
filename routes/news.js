const express = require('express')
const News = require('./../models/news')
const news = require('./../models/news')
const Newstype = require('./../models/newstype')
const router = express.Router()

router.get('/', async (req, res) => {

    let searchOptions = {}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('index', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }



})
    
router.get('/about', async (req, res) => {

    let searchOptions = {}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('about', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }

})

router.get('/contact', async (req, res) => {

    let searchOptions = {}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('contact', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }

})

router.get('/feedback', async (req, res) => {

    let searchOptions = {}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('feedback', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }

})

router.get('/finance', async (req, res) => {

    let searchOptions = {newstype: "Finance"}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('finance', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }

})

router.get('/entertainment', async (req, res) => {
    let searchOptions = {newstype: "Entertainment"}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('entertainment', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }
})

router.get('/dailyaffairs', async (req, res) => {
    let searchOptions = {newstype: "Daily Affairs"}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('dailyaffairs', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }
})
router.get('/international', async (req, res) => {
    let searchOptions = {newstype: "International"}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('international', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }
})

router.get('/sports', async (req, res) => {
    let searchOptions = {newstype: "Sports"}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('sports', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }
})


router.get('/compose', async (req, res) => {
    
    let searchOptions = {newstype: "Sports"}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.find( /* No condition*/ searchOptions )
        res.render('compose', {
            news: news,
            searchOptions: req.query
        })  

    } catch (error) {
        console.log(error)
    }
})

router.post('/compose', async (req, res) => {
    const news = new News({
        title: req.body.title,
        description: req.body.title,
        content: req.body.content,
        newstype: req.body.newstype
    })

    try {
        const newArticle = await news.save()
        res.redirect('/')
    } catch (error) {
        
        console.log(error)
    }

})


router.get('/:slug', async (req, res) => {
    let searchOptions = {}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try {
        const news = await News.findOne({ slug: req.params.slug })
        if (news == null) res.redirect('/')
        res.render('show', { news: news })
    } catch (error) {
        console.log(error)
    }
    

})

router.get('/:id', async (req, res) => {
    let searchOptions = {}
    if(req.query.title != null && req.query.title !== ''){
        searchOptions.title = /* New Regular Expression */ new RegExp(req.query.title, 'i') //i means case sensitive
    }
    try{
        const news = await News.findById(req.params.id)
        res.render('show', {news: news})
        // res.redirect('https://www.google.com')
    }
    catch(error){
        console.log(error)
        res.redirect('/')
    }
})

module.exports = router
