const express=require('express');
const controller=require('../controllers/Review');
const Router=express.Router();


Router.post('/addreview',controller.addReview);
Router.get('/getreviews',controller.getReviews);

module.exports=Router;