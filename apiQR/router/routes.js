const express = require("express");
const { body, param, validationResult } = require("express-validator");
var router = express.Router();
const qr=require('../qr/qr');

router.post(
    '/qr',
    [
      body('str').not().isEmpty().isString()
    ],
    (req, res) => {
        console.log(req.body.str);
        qr.qr(req.body.str, (data) => {
            res.json(data);
        });
    }
);

module.exports = router;