module.exports = {
    sendMail: (transporter, body, callback) => {
    transporter.sendMail(body, function(err, info){
        if (err) {
            callback({
                success: false,
                err: JSON.stringify(err),
              });
            return;
        } else {
            callback({ success: true, response: info.response  });
        }
        });
    }
}