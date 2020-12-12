const Bindings = require('../models/bindings')
const Brand = require('../models/brand')

const async = require('async')
const { response } = require('express')
const { body, validationResult } = require('express-validator')

// CREATE
    // Display 'Create Bindings' form on GET request

    // Handle 'Create Bindings' form POST request

// READ
    // Display all bindings
    exports.bindings_read_get = function (req, res, next) {
        res.render('index', {title: "Not created yet"})
    }

    // Display details of one specific bindings
    exports.bindingsItem_read_get = function (req, res, next) {
        res.render('index', {title: "Not created yet"})
    }

// UPDATE
    // Display 'Update Bindings' form on GET request

    // Handle 'Update Bindings' form POST request

// DELETE
    // Display 'Delete Bindings' form on GET request

    // Handle 'Delete Bindings' form POST request