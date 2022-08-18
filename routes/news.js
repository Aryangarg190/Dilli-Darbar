const express = require('express')
const News = require('./../models/news')
const Newstype = require('./../models/newstype')
const router = express.Router()

router.get('/', (req, res) => [
    res.render('index')
])

router.get('/about', (req, res) => [
    res.render('about')
])

router.get('/contact', (req, res) => [
    res.render('contact')
])

router.get('/Feedback', (req, res) => [
    res.render('feedback')
])

router.get('/finance', (req, res) => [
    res.render('finance')
])

router.get('/entertainment', (req, res) => [
    res.render('entertainment')
])

router.get('/dailyaffairs', (req, res) => [
    res.render('dailyaffairs')
])

router.get('/international', (req, res) => [
    res.render('international')
])

router.get('/sports', (req, res) => [
    res.render('sports')
])

module.exports = router
