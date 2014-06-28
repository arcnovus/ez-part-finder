/*jslint node: true */
(function (global) {

    'use strict';
    var frisby = require('frisby'),
        config = require('./test-config.js');

    frisby.create('Get the root url')
        .get(config.baseUrl)
        .expectStatus(200)
        .expectBodyContains('to see here')
        .toss();

}(this));