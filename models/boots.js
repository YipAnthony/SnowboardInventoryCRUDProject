const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BootsSchema = new Schema( 
    {
        brand: {type: Schema.Types.ObjectId, ref: 'Brand', required: true},
        externalLink: {type: String},
        flex: {type: String},
        lacing: {type: String},
        price: {type: Number},
        size: {type: String},
        stock: {type: Number}
    }
)

// Virtuals
BootsSchema
.virtual('url')
.get(function() { // I use a anonymous function rather than an arrow function bc 'this' in the next line will not assign properly w/ arrows
    return '/boots/' + this._id
})

module.exports = mongoose.model('Boots', BootsSchema)