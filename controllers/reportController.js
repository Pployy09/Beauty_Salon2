const Stock = require('../models/Stock');

//show stock
exports.showStocks = async (req,res) =>{
    await   Stock.find().then(function(stocks){
            res.render("report",{ stockList:stocks });
     })
     
};