/*jslint node: true*/
(function (global) {

    'use strict';

    var settings = {},
        config;

    config = function (env) {
        env = env || 'prod';
        return settings[env];
    };

    settings.dev = {
        baseUrl: "http://localhost:4444/",
        apiRoute: "/api/"
    };

    module.exports = config('dev');

}(this));