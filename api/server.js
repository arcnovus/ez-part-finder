/*jslint node: true */
(function (global) {

    'use strict';

    var express = require('express'),
        bodyParser = require('body-parser'),
        morgan = require('morgan'),
        winston = require('winston'),
        mongoose = require('mongoose'),
        config = require('./config'),
        brandService = require('./modules/brands/brand-service'),
        rest = require('./modules/common/arc-rest'),
        app = express(),
        router = express.Router(),
        db,
        onBrowse,
        onBrowseApi,
        winstonStream = {
            write: function (message, encoding) {
                winston.info(message);
            }
        };
    app.use(morgan({
        stream: winstonStream
    }));
    app.use(bodyParser());
    app.use('/', router);

    onBrowse = function (req, res) {
        res.send('Nothing to see here.');
    };

    onBrowseApi = function (req, res) {
        console.log("Method:");
        console.log(req.method);
        res.type('application/json');
        rest.handleSuccess(req, res, {
            "response": "API is live and waiting"
        });
    };

    router.get('/', onBrowse);
    router.get('/api', onBrowseApi);
    router.post('/api/brands', brandService.add);
    router.delete('/api/brands/:name', brandService.delete);

    app.use(rest.handleError);

    mongoose.connect(config.connString);
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        console.log('connected!!!');
    });
    app.listen('4444');

    console.log('Listening on "4444"');
}(this));