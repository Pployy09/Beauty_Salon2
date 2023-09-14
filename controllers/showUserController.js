const User = require('../models/User')

exports.showHome = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('home-user',{UserData})
}

exports.showBook = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('booking-user',{UserData})
}

exports.showEmpEdit = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('employeeEdit-admin',{UserData})
}

exports.showEdits = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('information-user',{UserData})
}

exports.showEditUser = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('editInformation-user',{UserData})
}

exports.showEdit = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('editInformation-admin',{UserData})
}

exports.showEmpTable = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('employeetable-admin',{UserData})
}

exports.showHomeAdmin = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('home-admin',{UserData})
}

exports.showHomeContact = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('homeContact-admin',{UserData})
}

exports.showPay = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('pay-admin',{UserData})
}

exports.showQueuebook = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('queuebooking-admin',{UserData})
}




