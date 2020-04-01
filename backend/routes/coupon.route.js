const express = require('express');
const app = express();
const couponRoute = express.Router();

// Coupon model
let Coupon = require('../models/Coupons');

// Get All Coupons
couponRoute.route('/coupons').get((req, res) => {
  Coupon.find((error, coupons) => {
    if (error) {
      return next(error)
    } else {
      res.json(coupons)
    }
  })
})


// Add Coupon
couponRoute.route('/coupon-item').post((req, res, next) => {
    let newCouponItem = new Item({
        id : req.body.id,
        image : req.body.image,
        heading : req.body.heading,
        offer: req.body.offer, 
        detailsInfo: req.body.detailsInfo
      
    });
    newCouponItem.save((err, coupon)=>{
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Item has been added Sucessfully'});
        }
    });
});


// Get single coupon
couponRoute.route('/read-coupon-item/:id').get((req, res) => {
  Coupon.findById(req.params.id, (error, coupon) => {
    if (error) {
        res.json(error);
    } else {
      res.json(coupon)
    }
  })
})


// Update coupon
couponRoute.route('/update-coupons-item/:id').put((req, res, next) => {
  Coupon.findByIdAndUpdate(req.params.id, {
    $set: {
        id : req.body.id,
        image : req.body.image,
        heading : req.body.heading,
        offer: req.body.offer, 
        detailsInfo: req.body.detailsInfo
    }
  }, (error, coupon) => {
    if (error) {
        res.json(error);
      console.log(error)
    } else {
      res.json(coupon)
      console.log('Data updated successfully')
    }
  })
})


// Delete coupon
couponRoute.route('/delete-coupon-item/:id').delete((req, res, next) => {
  Coupon.findOneAndRemove(req.params.id, (error, coupon) => {
    if (error) {
        res.json(error);
    } else {
      res.status(200).json({
        msg: coupon
      })
    }
  })
})


module.exports = couponRoute;




