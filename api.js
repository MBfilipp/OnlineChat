const express = require('express');
const router = express.Router();
const Mugger = require('./mugger.js');

router.get('/muggers', (req, res) => {
    Mugger.find({})
        .then(mugger => {
            res.send(mugger)
        })
});

router.post('/muggers', (req, res) => {
    Mugger.create(req.body)
        .then(mugger => {
            res.send(mugger)
        })
});

router.put('/muggers/:name', (req, res) => {
    Mugger.updateOne({name: req.params.name}, req.body)
        .then(() => {
            Mugger.findOne({name: req.params.name})
                .then(mugger => {
                    res.send(mugger)
                })
        })
});

router.delete('/muggers/:name', (req, res) => {
    Mugger.deleteOne({name: req.params.name})
        .then(mugger => {
            res.send(mugger)
        })
});

module.exports = router;