/*jslint node: true */
(function (global) {

    'use strict';

    var mongoose = require('mongoose'),
        schemaDef = {},
        brandSchema;

    schemaDef = {
        name: "String",
        lookupUrl: "String",
        mainUrl: "String",
        isActive: "Boolean"
    };


    brandSchema = new mongoose.Schema(schemaDef);

    module.exports = mongoose.model('Brand', brandSchema);

    console.log('All done!');

}(this));