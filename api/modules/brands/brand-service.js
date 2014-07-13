/*jslint node: true, nomen: true */
(function (global) {

    'use strict';


    var mongoose = require('mongoose'),
        Brand = require('./Brand'),
        config = require('./../../config'),
        monstat = require('./../common/monstat'),
        rest = require('./../common/arc-rest'),
        onAddBrandSuccess,
        db,
        onBrandCreate,
        addBrand;

    exports.add = function addBrand(req, res, next) {
        var brand = req.body;
        Brand.create(brand, function (err, saved) {
            if (err) {
                rest.handleError(err, req, res);
            } else {
                console.log('saved');
                console.log(req.body.name);
                console.log(saved);
                rest.handleSuccess(req, res, saved);
            }
        });
    };

    exports.delete = function deleteBrand(req, res, next) {
        var name = req.params.name;
        Brand.remove("{_id: " + name + "}", function (err) {
            if (err) {
                rest.handleError(err, req, res);
            } else {
                console.log('deleted');
                console.log(req.body.name);
                rest.handleSuccess(req, res);
            }
        });
    };

}(this));