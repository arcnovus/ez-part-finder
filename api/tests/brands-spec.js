/*jslint node: true */
(function (global) {

    'use strict';
    var frisby = require('frisby'),
        config = require('./../config.js');

    describe("Testing the brand service", function () {

        var brand = {},
            url = config.baseUrl + "/api/brands";

        brand = {
            name: "test brand",
            lookupUrl: "http://lookup.test.url",
            isActive: true,
            mainUrl: "http://main.test.url"
        };

        it("should create a new brand.'",
            function () {
                brand.name = brand.name.toUpperCase();
                frisby.create('Create brand')
                    .post(url, brand, {
                        json: true
                    })
                    .expectStatus(201)
                    .expectHeaderContains('Content-Type', 'application/json')
                    .inspectJSON()
                    .expectJSON(brand)
                    .toss();
            });
    });
}(this));
