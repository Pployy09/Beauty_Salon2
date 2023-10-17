const User = require('../models/User');
const QueueBookingCustomer = require('../models/Queuebooking-Customer');

//show info emp all
exports.showEmpTable = async (req,res) => {

    const UserData = await User.findById(req.session.userId);
    const QueueBookingCustomerData = await QueueBookingCustomer.find({emp_selection_status:"เลือกพนักงานแล้ว"});
         res.render("employeetable-admin",{
            QueueBookingCustomerData : QueueBookingCustomerData,
            UserData: UserData,
            
      
        
        });
    
}