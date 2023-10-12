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