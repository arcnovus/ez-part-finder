/*jslint node: true, nomen: true */
(function (global) {

    'use strict';

    var mongoose = require('mongoose'),
        schemaDef = {},
        brandSchema,
        setName,
        getName;

    schemaDef = {
        _id: {
            type: "String",
            required: "'Name' is required and must be a non-empty string"
        },
        lookupUrl: "String",
        mainUrl: "String",
        isActive: {
            type: "Boolean",
            default: false
        }
    };

    setName = function setName(name) {
        if (name && name === String(name) && name.trim().length > 0) {
            this._id = name.trim().toUpperCase();
        }
    };

    getName = function getName() {
        return this._id;
    };

    brandSchema = new mongoose.Schema(schemaDef);
    brandSchema.virtual('name').get(getName);
    brandSchema.virtual('name').set(setName);
    brandSchema.set('toObject', {
        virtuals: true
    });
    brandSchema.set('toJSON', {
        virtuals: true
    });

    module.exports = mongoose.model('Brand', brandSchema);

}(this));
