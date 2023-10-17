const User = require('../models/User')

module.exports = (req, res, next) => {
    User.findById(req.session.userId).then((user) => {
        if(user.role == 'admin'){
            next();
        }else {
          res.redirect('/no-access'); // ถ้าไม่ใช่บทบาท "admin" เรียกหน้าที่ไม่ได้รับอนุญาต
        }
        console.log('successfully')
        
    })
}

/*
module.exports = (req, res, next) => {
    User.findById(req.session.userId).then((user) => {
        if (user.role == 'admin') {
            next();
        } else {
            // ใช้ JavaScript เพื่อแสดงแจ้งเตือนและกลับไปหน้าก่อนหน้า
            res.send('<script>alert("คุณไม่ได้รับอนุญาตให้เข้าถึงหน้านี้"); window.history.go(-1);</script>');
        }
        console.log('successfully');
    });
}
*/