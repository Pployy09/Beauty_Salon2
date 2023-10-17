const User = require('../models/User')

module.exports = (req, res, next) => {
    User.findById(req.session.userId).then((user) => {
        if (user.role == 'admin') {
            next();
        } else {
            // ใช้ JavaScript เพื่อแสดงแจ้งเตือนและกลับไปหน้าก่อนหน้า
            res.send('<script>alert("คุณไม่ได้รับอนุญาตในส่วนนี้"); window.history.go(-1);</script>');
        }
        console.log('successfully');
    });
}
