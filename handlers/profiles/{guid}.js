'use strict';

var repository = require('../../profilesRepository');

module.exports = {
    get: function profiles_get(req, res) {
        res.json(repository.get(req.params['guid']));
    }    
};
