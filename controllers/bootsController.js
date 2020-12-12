const Boots = require('../models/boots')
const Brand = require('../models/brand')

const async = require('async')
const { response } = require('express')
const { body, validationResult } = require('express-validator')

// CREATE
    // Display 'Create Boots' form on GET request

    // Handle 'Create Boots' form POST request

// READ
    // Display all boots
    exports.boots_read_get = function (req, res, next) {
        res.render('index', {title: "Not created yet"})
    }

    // Display details of one specific boots
    exports.bootsItem_read_get = function (req, res, next) {
        res.render('index', {title: "Not created yet"})
    }

// UPDATE
    // Display 'Update Boots' form on GET request

    // Handle 'Update Boots' form POST request

// DELETE
    // Display 'Delete Boots' form on GET request

    // Handle 'Delete Boots' form POST request