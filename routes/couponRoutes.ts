const router = require('express').Router();

const {getCoupon, markCouponAsUsed, createCoupon} = require('../controllers/coupons');

// Route to check if a couponexists
router.get('/:value', getCoupon);

// Route to patch a coupon when payment is made
router.patch('/:value', markCouponAsUsed);

router.post('/', createCoupon);

module.exports = router;
