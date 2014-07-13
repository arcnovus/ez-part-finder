/*jslint node: true */

(function (global) {

    'use strict';

    var environment = process.env.NODE_ENV || 'development',
        winston = require('winston'),
        logger;

    logger = new winston.Logger({
        transports: [new winston.transports.Console()]
    });

    exports.handleError = function handleError(err, req, res, next) {
        var exception = {},
            statusCode = 500;
        logger.info("error: " + err);
        if (environment !== 'production') {
            exception.innerError = err;
        }
        res.type('application/json');
        res.json(statusCode, exception);
        if (next && typeof (next) === 'function') {
            next();
        }
    };

    exports.handleSuccess = function handleSuccess(req, res, obj) {
        var statusCode = 200;
        logger.info("handleSuccess method:");
        logger.info(req.method);
        obj = obj || {
            response: "success!"
        };

        switch (req.method) {
        case 'GET':
            statusCode = 200;
            break;

        case 'POST':
            statusCode = 201;
            break;

        case 'PUT':
            statusCode = 200;
            break;

        case 'DELETE':
            statusCode = 200;
            break;
        }

        if (typeof (obj) === 'function') {
            obj();
        } else {
            res.type('application/json');
            res.json(statusCode, obj);
        }
    };

}(this));