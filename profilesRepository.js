'use strict';

var profiles = require('./profiles.json');
var jp = require('jsonpath')

module.exports = {
    get: function (guid) {
        return jp.query(profiles, '$..[?(@.guid=='+guid+')]');
    },
    all: function () {
        return profiles;
    }
};
