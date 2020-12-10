const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BindingsSchema = new Schema( 
    {
        brand: {type: Schema.Types.ObjectId, ref: 'Brand', required: true},
        size: {type: String},
        flex: {type: String},
        type: {type: String},
        externalLink: {type: String},
        mount: {type: Number},
        price: {type: Number},
        stock: {type: Number}
    }
)

// Virtuals
BindingsSchema
.virtual('url')
.get(function() { // I use a anonymous function rather than an arrow function bc 'this' in the next line will not assign properly w/ arrows
    return '/bindings/' + this._id
})

module.exports = mongoose.model('Bindings', BindingsSchema)