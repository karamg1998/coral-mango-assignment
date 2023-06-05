const express=require('express');
const controller=require('../controllers/Restaurant');
const Router=express.Router();

Router.post('/add-restaurant',controller.addRestaurant);
Router.get('/restaurants',controller.getRestaurant);
Router.get('/details',controller.details);

module.exports=Router;