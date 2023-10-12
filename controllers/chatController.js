const User = require('../models/User')

//show chat
exports.showChat = async (req,res) =>{
    const UserData = await User.findById(req.session.userId)
         res.render("chatbot-admin",{ 
            UserData : UserData,
     })
};