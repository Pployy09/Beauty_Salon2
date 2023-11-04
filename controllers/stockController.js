const Stock = require('../models/Stock');
const User = require('../models/User')
const QueueBookingCustomer = require('../models/Queuebooking-Customer');

//show stock
exports.showStock = async (req,res) =>{
    const  UserData = await User.findById(req.session.userId)
    await   Stock.find().then(function(stocks){
            res.render("stock-admin",{
            stockList:stocks,
            UserData:UserData,
            QueueBookingCustomer
        });
     })
};

//add stock 
exports.addStock = async (req, res) => {
    try {
        const existingProducts = await Stock.find({});
        const code = `P${(existingProducts.length + 1).toString().padStart(3, '0')}`;

        // ค้นหาสินค้าที่มีชื่อเหมือนกัน
        const existingProduct = await Stock.findOne({ name_product: req.body.name_product });

        if (existingProduct) {
            // ถ้ามีสินค้าเดิมที่มีชื่อเหมือนกัน
            // ให้บวกจำนวนใหม่กับจำนวนเดิม
            const newUnit = parseInt(existingProduct.unit_product) + parseInt(req.body.unit_product);
            existingProduct.unit_product = newUnit;
            existingProduct.save();
            console.log("เพิ่มจำนวน:", existingProduct.name_product);
        } else {
            // ถ้าไม่มีสินค้าเดิมที่มีชื่อเหมือนกัน
            // ให้สร้างสินค้าใหม่
            const stocks = new Stock({
                code,
                name_product: req.body.name_product,
                price_product: req.body.price_product,
                unit_product: req.body.unit_product,
            });

            stocks.save();
            console.log("Created new stock successfully!");
        }

        res.redirect('/stock-admin');
    } catch (error) {
        console.log("Error:", error);
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