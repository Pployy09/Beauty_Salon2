const Stock = require('../models/Stock');
const User = require('../models/User')

//show service
exports.showStock = async (req,res) =>{
    const  UserData = await User.findById(req.session.userId)
    await   Stock.find().then(function(stocks){
            res.render("stock-admin",{
            stockList:stocks,
            UserData:UserData
        });
     })
};

//add service 
exports.addStock = async (req,res) =>{ 
    try{
       const stocks = await new Stock({
        idproduct : req.body.idproduct,
        name_product : req.body.name_product,
        price_product :  req.body.price_product,
        }); 

       stocks.save();
       console.log("Create stock successfully!")
       res.redirect('/stock-admin');
    } catch(error){
        console.log("Error")
    }
};

//edit service 
exports.editStock = async (req,res) =>{
    try{
        const  stock = await  Stock.findOne({ _id : req.params.id});
        res.render('editStock-admin',{ stock : stock });
    }catch(error){
        console.log(error);
    }
};

//update service 
exports.editPutStock = async (req,res) =>{
    try{
        await Stock.findByIdAndUpdate(req.params.id,{
            idproduct : req.body.idproduct,
            name_product : req.body.name_product,
            price_product :  req.body.price_product,
        })
    
        res.redirect('/stock-admin');

    }catch(error){
        console.log(error);
    }
};

//delete service
exports.deleteStock = async (req,res) =>{
    try{
        await Stock.deleteOne({ _id:req.params.id});
        res.redirect('/stock-admin');

    }catch(error){
        console.log(error);
    }
};







