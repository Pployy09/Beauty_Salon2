const User = require('../models/User')
const QueueBookingCustomer = require('../models/Queuebooking-Customer');
const Pay = require('../models/Pay')
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');

exports.showEmpEdit = async(req, res) => {
    const UserData = await User.findById(req.session.userId);

    const ServiceData = await Service.find();
    const HomeData = await Home.find();
    const {id} = req.params;
    const qr = await Pay.findOne({id})
    const QueueBookingCustomerData = await QueueBookingCustomer.find({emp_selection_status:"เลือกพนักงานแล้ว"});
    res.render('employeeEdit-admin',{
        UserData, 
        QueueBookingCustomerData,
        qr,
        ServiceDataList : ServiceData,
        HomeData : HomeData,})
}

exports.showEditUser = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    const {id} = req.params;
    const home = await Home.findOne({id})
    res.render('editInformation-user',{UserData,home})
}

exports.showEdit = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('editInformation-admin',{UserData})
}

exports.showPay = async(req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('pay-admin',{UserData})
}





