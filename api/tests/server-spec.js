/*jslint node: true */
(function (global) {

    'use strict';
    var frisby = require('frisby'),
        config = require('./../config.js');

    describe("Testing the server root", function () {
        it("should respond with status 200 and say 'Nothing to see here.'",
            function () {
                frisby.create('Get the root url')
                    .get(config.baseUrl)
                    .expectStatus(200)
                    .expectBodyContains('Nothing to see here.')
                    .toss();
            });
    });
}(this));
