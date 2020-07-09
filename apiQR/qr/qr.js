const qrcode = require('qrcode');

module.exports = {
    qr(str, callback) {
        dataURL = qrcode.toDataURL(str, function(err, dataUrl) {
            if (dataUrl) {
                callback({dataUrl});
            }
            else if (err) {
                callback(err);
            }
        });
    }
}