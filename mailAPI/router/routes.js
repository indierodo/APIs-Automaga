const express = require("express");
const { body, param, validationResult } = require("express-validator");
var router = express.Router();

// para mandar emails
const transporter = require("../mailapi/transporter");
const mailer = require("../mailapi/mailer");

router.post(
  "/mail",
  [
    body("from").not().isEmpty().isString(),
    body("to").not().isEmpty().isString(),
    body("subject").not().isEmpty().isString(),
    body("text").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    mailer.sendMail(transporter, body, (data) => {
      res.json(data);
    });
  }
);

module.exports = router;
