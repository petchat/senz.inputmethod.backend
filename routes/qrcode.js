var router = require('express').Router();
var uuid = require('node-uuid');

// qrcode 页面
router.get('/', function (req, res, next) {
    req.session.uuid = req.session.uuid || uuid.v4();
    var src = 'http://my.tv.sohu.com/user/a/wvideo/getQRCode.do?width=200&height=200&text=' + req.session.uuid;
    res.render('qrcode', {uuid: req.session.uuid, src: src});
});

module.exports = router;
