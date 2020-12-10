const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BrandSchema = new Schema(
    {
        name: {type: String, required: true, minlength: 1}
    }
)

// Virtuals
BrandSchema.virtual('url')
.get(function() {
    return '/brand/' + this._id
})

module.exports = mongoose.model('Brand', BrandSchema)