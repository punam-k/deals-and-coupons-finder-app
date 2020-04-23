const express = require('express');
const userRoutes = require('../routes/user.route.js');
const couponRoutes = require('../routes/coupon.route.js');
const cartsRoutes = require('../routes/cart.route.js');
const ordersRoutes = require('../routes/order.route.js');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/coupon', couponRoutes);
router.use('/user', userRoutes);
router.use('/cart', cartsRoutes);
router.use('/order', ordersRoutes);

module.exports = router;