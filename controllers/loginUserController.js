const User = require('../models/User')
const bcrypt = require('bcrypt')
const flash = require('connect-flash')
//สมัคร
exports.addUser = async (req, res) => {
    const { username } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            console.log("Username already exists!");
            // ส่งข้อความผิดพลาดไปยังหน้าเว็บ
            req.flash('error', 'ชื่อผู้ใช้ซ้ำ');
            req.session.formData = req.body;
            res.redirect('/register')
        }

        // หากไม่มีชื่อผู้ใช้ที่ซ้ำกันในฐานข้อมูล
        await User.create(req.body);
        console.log("User registered successfully!");
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        // ส่งข้อความผิดพลาดไปยังหน้าเว็บ
    }
}

// ใน loginUser
exports.loginUser = (req, res) => {
    const { username, password } = req.body 

    User.findOne({ username: username }).then((user) => {
        console.log(user)

        if (user) {
            let cmp = bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    if (user.role == 'user'){
                        req.session.userId = user._id
                        res.redirect('/home-user')
                    } else {
                        // ถ้าไม่ใช่บทบาท 'user'
                        req.flash('error', 'ไม่สามารถเข้าสู่ระบบได้')
                        res.redirect('/login-user')
                    }
                } else {
                    // รหัสผ่านไม่ถูกต้อง
                    req.flash('error', 'ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง')
                    res.redirect('/login-user')
                }
            })
        } else {
            // ไม่พบผู้ใช้
            req.flash('error', 'ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง')
            res.redirect('/login-user')
        }
    })
}

// ใน loginAdmin
exports.loginAdmin = (req, res) => {
    const { username, password } = req.body 

    User.findOne({ username: username }).then((user) => {
        console.log(user)

        if (user) {
            let cmp = bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    if (user.role == 'admin'){ // ตรวจสอบบทบาท 'admin' หรือ 'emp'
                        req.session.userId = user._id
                        res.redirect('/home-admin')
                    } else if (user.role == 'emp') {
                        req.session.userId = user._id
                        res.redirect('/queuebooking-admin')
                        
                    } else {
                        // ถ้าไม่ใช่บทบาท 'admin' หรือ 'emp'
                        req.flash("error", 'ไม่สามารถเข้าสู่ระบบได้')
                        res.redirect('/login-admin')
                    }
                } else {
                    // รหัสผ่านไม่ถูกต้อง
                    req.flash("error", 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                    res.redirect('/login-admin')
                }
            })
        } else {
            // ไม่พบผู้ใช้
            req.flash("error", 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
            res.redirect('/login-admin')
        }
    })
}
