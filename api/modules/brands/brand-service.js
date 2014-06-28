/*jslint node: true */
(function (global) {

    'use strict';

    var mongoose = require('mongoose'),
        brandManager = require('./brand-manager');


    exports.add = function addBrand(req, res) {
        brandManager.add(req.body);
        res.type('application/json');
        res.json(req.body);
    };

}(this));