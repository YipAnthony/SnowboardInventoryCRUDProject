const Snowboard = require('../models/snowboard')
const Brand = require('../models/brand')
const snowboardItem = require('../models/snowboardItem')

const async = require('async')
const { response } = require('express')
const { body, validationResult } = require('express-validator')


// CREATE
    // Display 'Create Snowboard' form on GET request

    // Handle 'Create Snowboard' form POST request

// READ
    // Display all snowboards
    exports.snowboard_read_get = function (req, res, next) {
        Snowboard
        .find().populate('brand')
        .sort([['name', 'ascending']])
        .exec(function(err, snowboard_list) {
            if (err) return next(err)

            res.render('snowboard_list', {title: 'Snowboards', snowboard_list: snowboard_list})
        })
    }

    // Display details of one specific snowboard
    exports.snowboardItem_read_get = function (req, res, next) {
        async.parallel(
            {
                snowboard: function(callback) {
                    Snowboard.findById(req.params.id)
                        .populate('brand')
                        .exec(callback)
                },
                snowboardItem: function(callback) {
                    snowboardItem.find({'snowboard': req.params.id})
                        .sort([['length', 'ascending']])
                        .exec(callback)
                }
            }, function(err, results) {
                if (err) return next(err)

                // Has boards in stock
                if (results.snowboardItem.length >= 0) {
                    res.render('snowboard_item', {title: 'Product details', snowboard: results.snowboard, snowboardItem: results.snowboardItem})
                }
            }
        )
    }

// UPDATE
    // Display 'Update Snowboard' form on GET request

    // Handle 'Update Snowboard' form POST request

// DELETE
    // Display 'Delete Snowboard' form on GET request

    // Handle 'Delete Snowboard' form POST request
