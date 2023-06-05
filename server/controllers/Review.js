const Restaurant = require('../models/restaurant');
const Review = require('../models/review');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


function parseToken(id) {
    let parseId = jwt.verify(id, process.env.jwt);
    return parseId.Id;

}

exports.addReview = async (req, res, next) => {
    let id = parseToken(req.body.id);
    try {
        await Review.create({
            review: req.body.review,
            RestaurantId: id
        }).then(re => {
            res.status(200).json({ success: true, message: 'review added', review: re.review });
        })
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
};

exports.getReviews = async (req, res, next) => {
    try{
      await  Restaurant.findAll({ include: Review })
        .then(r => {
            let response = r.map((index) => {
                return ({ id: index.id, name: index.name, review: index.Reviews.length })
            })
            res.json(response);
        })
    }
    catch(err)
    {
        res.status(500).json({err:err});
    }
};