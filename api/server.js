/*jslint node: true */
(function (global) {

    'use strict';

    var express = require('express'),
        bodyParser = require('body-parser'),
        morgan = require('morgan'),
        app = express(),
        router = express.Router(),
        onBrowse,
        onBrowseApi;

    app.use(morgan());
    app.use(bodyParser());
    app.use('/', router);

    onBrowse = function (req, res) {
        res.send('Nothing to see here.');
    };

    onBrowseApi = function (req, res) {
        res.type('application/json');
        res.json({
            "response": "API is live and waiting"
        });
    };

    router.get('/', onBrowse);
    router.get('/api', onBrowseApi);

    app.listen('4444');

    console.log('Listening on "4444"');
}(this));