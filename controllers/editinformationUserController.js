const User = require('../models/User')
const QueueBookingCustomer = require('../models/Queuebooking-Customer');
const Pay = require('../models/Pay')
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');

exports.showEdits = async (req, res) => {
    try {
        const UserData = await User.findById(req.session.userId);
        const ServiceData = await Service.find();
        const HomeData = await Home.find();
        const {id} = req.params;
        const home = await Home.findOne({id})
        const qr = await Pay.findOne({id})

        if (!UserData) {
            return res.status(404).send('User not found');
        }
        const QueueBookingCustomerData = await QueueBookingCustomer.find({
            customerUsername: UserData.username
        });

        // Render the template with user and booking data
        res.render('information-user', { 
            UserData:UserData, 
            QueueBookingCustomerData,
            qr,
            ServiceDataList : ServiceData,
            HomeData : HomeData,home
     });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


//edit information
exports.editUser = async (req,res) =>{
    try{
        const {id} = req.params;
        const UserData = await User.findById(id)
        res.render('editInformation-user',{UserData})
    }catch(error){
        console.log(error);
    }
};

//update information 
exports.editPutUser = async (req,res) =>{
    const {id} = req.params;
    await User.findByIdAndUpdate(id,req.body,{runValidators:true});
    res.redirect('/information-user');
}

exports.showEdits2 = async (req, res) => {
    try {
        const UserData = await User.findById(req.session.userId);
        const ServiceData = await Service.find();
        const HomeData = await Home.find();
        const {id} = req.params;
        const home = await Home.findOne({id})
        const qr = await Pay.findOne({id})

        if (!UserData) {
            return res.status(404).send('User not found');
        }

        // Get the booking data for this user
        const QueueBookingCustomerData = await QueueBookingCustomer.find({
            customerUsername: UserData.username
        });

        // Render the template with user and booking data
        res.render('edit-booking-user', { 
            UserData:UserData, 
            QueueBookingCustomerData,
            qr,
            ServiceDataList : ServiceData,
            HomeData : HomeData,home
     });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
//edit booking
exports.editQueuebooking = async (req, res) =>{
    try{
        const UserData = await User.findById(req.session.userId);
        const HomeData = await Home.find();
        const ServiceData = await Service.find();
        const QueueBookingCustomerData = await QueueBookingCustomer.findOne({ _id : req.params.id});
        const {id} = req.params;
        const home = await Home.findOne({id})
        await  User.find({ role : "emp"}).then(function(emps){
            res.render('edit-booking-user',{
                UserData : UserData,
                QueueBookingCustomerData : QueueBookingCustomerData,
                HomeData : HomeData,
                ServiceDataList : ServiceData,
                empList : emps,home
                
            })
        });
       
    }catch(error){
        console.log("Error")
    }
}

//update booking
exports.editPutQueuebooking = async (req,res) =>{
    try{
    let id = req.params.id;
    let new_img = " "; 
    if (req.file) {
        new_img = req.file.filename;
        try {
            // ลบไฟล์รูปเดิม
            fs.unlinkSync('../uploads/' + req.body.slip);
            
        } catch (err) {
            console.log(err);
        }
    } else {
        new_img = req.body.slip;
    }
        await Home.findByIdAndUpdate(id,req.body,{runValidators:true});
        await QueueBookingCustomer.findByIdAndUpdate(id,{
            customerUsername:req.body.customerUsername,
            customerFirstname : req.body.firstname,
            customerLastname:req.body.lastname,
            phonenum : req.body.phonenum,
            booking_date_user : req.body.booking_date_user,
            booking_service_user :  req.body.booking_service_user,
            booking_time_user :  req.body.booking_time_user,
            employeeName : req.body.employeeName,
            price : req.body.price,
            status : req.body.status,
            slip: new_img
        })
        res.redirect('/information-user');

    }catch(error){
        console.log(error);
    }
};

//delete booking
exports.deleteQueuebooking = async (req,res) =>{
    try{
        await QueueBookingCustomer.deleteOne({ _id:req.params.id});
       
        res.redirect('/information-user');
        

    }catch(error){
        console.log(error);
    }
};