/*jslint node: true */

(function (global) {

    'use strict';

    var mapCode,
        mapName;

    exports.addStatusCode = function (err) {
        console.log(err.code);
        console.log("xxxxxxxx");
        if (err && err === Object(err)) {
            if (err.code) {
                err.statusCode = mapCode(err.code);
            } else if (err.name) {
                err.statusCode = mapName(err.name);
            }
        } else {
            err = {};
        }

        err.statusCode = err.statusCode || 500;
        return err;
    };

    mapName = function (name) {
        var code = 500;

        return code;
    };

    mapCode = function (code) {
        code = code || 500;
        switch (code) {
        case 11000:
            code = 409;
            break;

        default:
            code = 500;
            break;
        }

        return code;
    };
}(this));
