const Stock = require('../models/Stock');
const User = require('../models/User')

//show stock
exports.showStock = async (req,res) =>{
    const  UserData = await User.findById(req.session.userId)
    await   Stock.find().then(function(stocks){
            res.render("stock-admin",{
            stockList:stocks,
            UserData:UserData
        });
     })
};

//add stock 
exports.addStock = async (req,res) =>{ 
    try{
        const existingProducts = await Stock.find({});
        const code = `P${(existingProducts.length + 1).toString().padStart(3, '0')}`;

       const stocks = await new Stock({
        code,
        name_product  : req.body.name_product,
        price_product : req.body.price_product,
        unit_product  : req.body.unit_product,
        brand_product : req.body.brand_product,
        detail_product: req.body.detail_product,
        }); 

       stocks.save();
       console.log("Create stock successfully!")
       res.redirect('/stock-admin');
    } catch(error){
        console.log("Error")
    }
};

//edit stock
exports.editStock = async (req,res) =>{
    try{
        UserData = await User.findById(req.session.userId)
        const  stock = await  Stock.findOne({ _id : req.params.id});
        res.render('editStock-admin',{ stock : stock ,UserData});
    }catch(error){
        console.log(error);
    }
};

//update stock 
exports.editPutStock = async (req,res) =>{
    try{
        await Stock.findByIdAndUpdate(req.params.id,{
            idproduct     : req.body.idproduct,
            name_product  : req.body.name_product,
            price_product : req.body.price_product,
            unit_product  : req.body.unit_product,
            brand_product : req.body.brand_product,
            detail_product: req.body.detail_product,
        })
    
        res.redirect('/stock-admin');

    }catch(error){
        console.log(error);
    }
};

//delete stock
exports.deleteStock = async (req,res) =>{
    try{
        await Stock.deleteOne({ _id:req.params.id});
        res.redirect('/stock-admin');

    }catch(error){
        console.log(error);
    }
};







