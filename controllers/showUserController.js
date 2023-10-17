const User = require('../models/User')

exports.showEmpEdit = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('employeeEdit-admin',{UserData})
}

exports.showEditUser = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('editInformation-user',{UserData})
}

exports.showEdit = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('editInformation-admin',{UserData})
}

exports.showPay = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('pay-admin',{UserData})
}





