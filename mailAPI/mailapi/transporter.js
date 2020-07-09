var nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
      user: 'al174382@edu.uaa.mx',
      pass: ''
  },
  tls: {
    ciphers: 'SSLv3'
  }
});
