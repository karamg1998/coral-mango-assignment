const Restaurant = require('../models/restaurant');
const Review = require('../models/review');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function generateToken(id) {
    return jwt.sign({ Id: id }, process.env.JWT);
}

function parseToken(id) {
    let parseId = jwt.verify(id, process.env.JWT);
    return parseId.Id;

}

exports.addRestaurant = async (req, res, next) => {
    let name = req.body.name;
    let address = req.body.address;
    let description = req.body.description;
    try {
        await Restaurant.create({
            name: name,
            address: address,
            description: description
        }).then(re => {
            res.json({ success: true, message: 'restaurant addes successfully' });
        })
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
};

exports.getRestaurant = async (req, res, next) => {
    try {
        await Restaurant.findAll()
            .then(r => {
                let response = r.map((index) => {
                    return ({ id: generateToken(index.id), name: index.name, address: index.address });
                })
                res.json(response);
            })
    }
    catch (err) {
        res.status(500).json({ err: err });
    }
};

exports.details = async (req, res, next) => {
    let id = parseToken(req.header('id'));
    try {
        await Restaurant.findAll({ include: Review, where: { id: id } })
            .then(re => {
                let response = re.map((index) => {
                    return ({ name: index.name, address: index.address, description: index.description, Reviews: index.Reviews })
                })
                res.json(response);
            })
    }

    catch (err) {
        res.status(500).json({ err: err });
    }

};