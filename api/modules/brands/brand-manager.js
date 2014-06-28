/*jslint node: true */
(function (global) {

    'use strict';

    var mongoose = require('mongoose'),
        Brand = require('./Brand'),
        db,
        onBrandCreate,
        addBrand;

    mongoose.connect('mongodb://admin:kx-p1124@novus.modulusmongo.net:27017/aTij3uhu');
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        console.log('connected!!!');
    });

    onBrandCreate = function onBrandCreate(err, brand) {
        if (err) {
            console.log(err);
        }
    };

    exports.add = function (brand) {
        Brand.create(brand, onBrandCreate);
    };


}(this));