/*jslint node: true*/
(function (global) {

    'use strict';

    var settings = {},
        target = process.env.TEST_TARGET || 'local',
        port = process.env.PORT || '4444';


    settings.local = {
        baseUrl: "http://localhost:" + port + "/",
        connString: "mongodb://ezdbuser:ezpwd@localhost:27017/ezpfdb"
    };

    settings.remote = {
        baseUrl: "ezpfapitest-20490.onmodulus.net:" + port + "/",
        connString: "mongodb://admin:kx-p1124@novus.modulusmongo.net:27017/aTij3uhu"
    };


    module.exports = settings[target];

}(this));
