const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SnowboardItemSchema = new Schema( 
    {
        snowboard: { type: Schema.Types.ObjectId, ref: 'Snowboard', required: true }, //reference to the associated snowboard
        length: {type: Number, required: true, minlength: 1}, 
    }
)

// Virtuals
SnowboardItemSchema
.virtual('url')
.get(function() { // I use a anonymous function rather than an arrow function bc 'this' in the next line will not assign properly w/ arrows
    return '/snowboarditem/' + this._id
})

module.exports = mongoose.model('SnowboardItem', SnowboardItemSchema)