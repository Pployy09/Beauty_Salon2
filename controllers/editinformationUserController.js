const User = require('../models/User')
const QueueBookingCustomer = require('../models/Queuebooking-Customer');
const Pay = require('../models/Pay')


exports.showEdits = async (req, res) => {
    try {
        const {id} = req.params;
        const qr = await Pay.findOne({id})
        // Get the user data
        const UserData = await User.findById(req.session.userId);

        if (!UserData) {
            return res.status(404).send('User not found');
        }

        // Get the booking data for this user
        const QueueBookingCustomerData = await QueueBookingCustomer.find({
            customerUsername: UserData.username
        });

        // Render the template with user and booking data
        res.render('information-user', { 
            UserData, 
            QueueBookingCustomerData,
            qr,
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


//edit booking
exports.editQueuebooking = async (req, res) =>{
    try{
        const UserData = await User.findById(req.session.userId);
        const HomeData = await Home.find();
        const ServiceData = await Service.find();
        const QueueBookingCustomerData = await QueueBookingCustomer.findOne({ _id : req.params.id});
        await  User.find({ role : "emp"}).then(function(emps){
            res.render('information-user',{
                UserData : UserData,
                QueueBookingCustomerData : QueueBookingCustomerData,
                HomeData : HomeData,
                ServiceDataList : ServiceData,
                empList : emps,
                
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