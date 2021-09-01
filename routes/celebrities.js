const express = require('express');
const Celebrity = require('../models/celebrity');
const celebrityRouter = express.Router();

celebrityRouter.get('', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render('celebrities/index', {
                celebrities
            });
        })
        .catch(error => next(error));
});

celebrityRouter.post('', (req, res, next) => {
    const data = req.body;

    Celebrity.create(data)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(error => next(error));
});

celebrityRouter.get('/create', (req, res, next) => {
    res.render('celebrities/create');
});

celebrityRouter.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/show', {
                celebrity
            });
        })
        .catch(error => next(error));
});

celebrityRouter.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(error => next(error));
});

module.exports = celebrityRouter;