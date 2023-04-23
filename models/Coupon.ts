const db = require('mongoose');

const CouponSchema = new db.Schema({
    value: {type: String, unique: true},
    discount: String,
    isUsed: {type: Boolean, default: false},
    city: String,
    periods: Array
});

const Coupon = db.model('PromoCode', CouponSchema);

module.exports = Coupon;
