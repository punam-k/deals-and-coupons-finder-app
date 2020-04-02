const express = require('express');
const userRoutes = require('../routes/user.route.js');
const couponRoutes = require('../routes/coupon.route.js');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/coupon', authRoutes);
router.use('/user', userRoutes);

module.exports = router;