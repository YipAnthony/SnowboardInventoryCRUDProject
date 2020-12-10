const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SnowboardSchema = new Schema( 
    {
        brand: {type: Schema.Types.ObjectId, ref: 'Brand', required: true},
        // length: {type: Number, required: true, minlength: 1}, 
        bend: {type: String},
        shape: {type: String},
        mount: {type: String},
        name: {type: String},
        externalLink: {type: String},
        price: {type: Number},
    }
)

// Virtuals
SnowboardSchema
.virtual('url')
.get(function() { // I use a anonymous function rather than an arrow function bc 'this' in the next line will not assign properly w/ arrows
    return '/snowboard/' + this._id
})

module.exports = mongoose.model('Snowboard', SnowboardSchema)