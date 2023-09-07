const Stock = require('../models/Stock');

//show service
exports.showStock =  (req,res) =>{
     Stock.find().then(function(stocks){
        //console.log(services);
         res.render("stock-admin",{stockList:stocks});
     })
    // res.render("service-employee",{name: 'Orasa'});
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
