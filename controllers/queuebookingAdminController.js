const User = require('../models/User');
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');
const QueueBookingCustomer = require('../models/Queuebooking-Customer');


//show booking
exports.showQueuebooking = async(req, res) => {
    const UserData = await User.findById(req.session.userId);
    const ServiceData = await Service.find();
    const HomeData = await Home.find();
    const QueueBookingCustomerData = await QueueBookingCustomer.find();
    await User.find({ role : "emp"}).then(function(emps){
        res.render("queuebooking-admin",{
            empList         : emps,
            UserData        : UserData,
            ServiceDataList : ServiceData,
            HomeData        : HomeData,
            QueueBookingCustomerData : QueueBookingCustomerData,
        });
    });
    
}

// add booking
exports.addQueuebooking = async (req, res) => {
    try {
        const {
            customerName,
            phonenum,
            booking_date_user,
            booking_service_user,
            booking_time_user,
            employeeName
        } = req.body;

        // ตรวจสอบว่ามีการจองเวลาและพนักงานเหมือนกันหรือไม่
        const existingBookings = await QueueBookingCustomer.find({
            booking_date_user,
            booking_time_user   : { $in: booking_time_user },
            employeeName        : { $in: employeeName }
        });

        if (existingBookings.length > 0) {
            res.send("<script>alert('พนักงานคนนี้มีคิวเต็มแล้ว! กรุณาเลือกพนักงานคนอื่นหรือเปลี่ยนเวลาในการจองคิว'); window.location = '/queuebooking-admin';</script>");
            return;
        }

        // ถ้าไม่มีการจองเวลาและพนักงานเหมือนกัน ให้เพิ่มการจองลูกค้า
        const bookingCustomer = new QueueBookingCustomer({
            customerName,
            phonenum,
            booking_date_user,
            booking_service_user,
            booking_time_user,
            employeeName,
            emp_selection_status : "เลือกพนักงานแล้ว",
        });

        await bookingCustomer.save();
        console.log("Create service successfully!");
        res.redirect('/queuebooking-admin');
    } catch (error) {
        console.log("Error");
    }
}



//edit booking
exports.editQueuebooking = async (req, res) => {
    try {
        const UserData = await User.findById(req.session.userId);
        const HomeData = await Home.find();
        const ServiceData = await Service.find();
        const QueueBookingCustomerData = await QueueBookingCustomer.findOne({ _id: req.params.id });
        await User.find({ role: "emp" }).then(function (emps) {
            res.render('edit-queuebooking', {
                UserData: UserData,
                QueueBookingCustomerData: QueueBookingCustomerData,
                HomeData: HomeData,
                ServiceDataList: ServiceData,
                empList: emps,
            })
        });

    } catch (error) {
        console.log("Error")
    }
}

//update booking
exports.editPutQueuebooking = async (req, res) => {
    try {
        const {
            booking_date_user,
            booking_time_user,
            employeeName
        } = req.body;

        // ตรวจสอบว่ามีการจองเวลาและพนักงานเหมือนกันหรือไม่
        const existingBookings = await QueueBookingCustomer.find({
            booking_date_user,
            booking_time_user,
            employeeName,
            _id: { $ne: req.params.id } 
        });

        if (existingBookings.length > 0) {
            res.send("<script>alert('พนักงานคนนี้มีคิวเต็มแล้ว! กรุณาเลือกพนักงานคนอื่นหรือเปลี่ยนเวลาในการจองคิว'); window.location = '/queuebooking-admin';</script>");
            return;
        }

        // อัปเดตการจองลูกค้า
        await QueueBookingCustomer.findByIdAndUpdate(req.params.id, {
            customerUsername: req.body.customerUsername,
            customerFirstname: req.body.firstname,
            customerLastname: req.body.lastname,
            phonenum: req.body.phonenum,
            booking_date_user: req.body.booking_date_user,
            booking_service_user: req.body.booking_service_user,
            booking_time_user: req.body.booking_time_user,
            employeeName: req.body.employeeName,
            emp_selection_status: "เลือกพนักงานแล้ว",
            price: req.body.price,
        });

        res.redirect('/queuebooking-admin');
    } catch (error) {
        console.log(error);
    }
};

//delete booking
exports.deleteQueuebooking = async (req,res) =>{
    try{
        await QueueBookingCustomer.deleteOne({ _id:req.params.id});
       
        res.redirect('/queuebooking-admin');
        
    } catch(error){
        console.log(error);
    }
};