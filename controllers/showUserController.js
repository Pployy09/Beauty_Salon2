const User = require('../models/User')

exports.showHome = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('home-user',{UserData})
}



exports.showEmpEdit = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('employeeEdit-admin',{UserData})
}




exports.showHomeContact = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('homeContact-admin',{UserData})
}

exports.showPay = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('pay-admin',{UserData})
}



