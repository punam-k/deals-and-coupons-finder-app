const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Coupon = new Schema({
    id: {
        type: Number,
    },
    image: {
        type: String,
    },
    heading: {
        type: String,
    },
    offer: {
        type: String,
    },
    detailsInfo: {
        type: String,
    },
}, {
    collection: 'coupons'
})


module.exports = mongoose.model('Coupon', Coupon)
