const User = require('../models/User')
const bcrypt = require('bcrypt')

//สมัคร
exports.addUser = (req, res) => {
    User.create(req.body).then(() => {
        console.log("User registered successfully!")
        res.redirect('/')
    }).catch((error) => {
        // console.log(error.errors)

        if (error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/register')
        }
    })
}
//เช็ก login user
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
                    }
                } else {
                    res.redirect('/login-user')
                }
            })
        } else {
            res.redirect('/login-user')
        }
    })
}

//เช็ก login Admin
exports.loginAdmin = (req, res) => {
    const { username, password } = req.body 

    User.findOne({ username: username }).then((user) => {
        console.log(user)

        if (user) {
            let cmp = bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    if (user.role=='admin'){
                    req.session.userId = user._id
                    res.redirect('/home-admin')
                }
                } else {
                    res.redirect('/login-admin')
                }
            })
        } else {
            res.redirect('/login-admin')
        }
    })
}
