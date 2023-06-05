const express = require('express');
const sequelize = require('./database/db');
const cors = require('cors');
const app = express();
const compression=require('compression');
const helmet =require('helmet');
const dotenv=require('dotenv');
dotenv.config();

const Restaurant = require('./models/restaurant');
const Review = require('./models/review');

const restaurantRoutes=require('./routes/restaurantRoutes');
const reviewRoutes=require('./routes/reviewRoutes');

app.use(compression())
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(restaurantRoutes);
app.use(reviewRoutes);

Restaurant.hasMany(Review);


sequelize.sync().then(res => {
    app.listen(process.env.PORT);
}).catch(err => console.log(err));