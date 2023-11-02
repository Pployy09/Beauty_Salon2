const User = require('../models/User');
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');
const QueueBookingCustomer = require('../models/Queuebooking-Customer');
const Upload1image = require('../models/uploadimg')
const Upload2image = require('../models/uploadimg2')
const Upload3image = require('../models/uploadimg3')
const Upload4image = require('../models/uploadimg4')
const Upload5image = require('../models/uploadimg5')

exports.showBookingUser = async(req, res) => {
    const {id} = req.params;
    const home = await Home.findOne({id})
    const HomeData = await Home.find()
    const UserData = await User.findById(req.session.userId);
    const empUsers = await User.count({ role: "emp" });
    const img1 = await Upload1image.findOne({id})
    const img2 = await Upload2image.findOne({id})
    const img3 = await Upload3image.findOne({id})
    const img4 = await Upload4image.findOne({id})
    const img5 = await Upload5image.findOne({id})
    const EmpData = await User.find({ role : "emp"});
    const QueueBookingCustomerData = await QueueBookingCustomer.find();
    await Service.find().then(function(ServiceData){
        res.render("booking-user",{
            UserData:UserData,
            empList:EmpData,
            ServiceDataList : ServiceData,
            HomeData : HomeData,
            QueueBookingCustomerData:QueueBookingCustomerData,
            home,
            empUsers: empUsers,
            img1,img2,img3,img4,img5
          
        });
       
    });
};

exports.addBookingUser = async (req, res) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            res.send("<script>alert('กรุณาเข้าสู่ระบบเพื่อจองคิว'); window.location = '/login-user';</script>");
            return;
        }

        // ตรวจสอบว่ามีการจองซ้ำหรือไม่
        const existingBooking = await QueueBookingCustomer.findOne({
            customerUsername: user.username,
            booking_date_user: req.body.booking_date_user,
            booking_service_user: req.body.booking_service_user,
            booking_time_user: { $in: req.body.booking_time_user }
        });

        if (existingBooking) {
            res.send("<script>alert('ไม่สามารถจองได้ เนื่องจากมีการจองซ้ำ'); window.location = '/booking-user';</script>");
            return;
        }

        const bookingCustomer = new QueueBookingCustomer({
            customerUsername: user.username,
            customerFirstname: user.firstname,
            customerLastname: user.lastname,
            phonenumOfUsername: user.phonenum,
            booking_date_user: req.body.booking_date_user,
            booking_service_user: req.body.booking_service_user,
            booking_time_user: req.body.booking_time_user,
        });

        bookingCustomer.save();
        console.log("Create service successfully!");
        res.redirect('/booking-user');
    } catch (error) {
        console.log("Error");
    }
};

