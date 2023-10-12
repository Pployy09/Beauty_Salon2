const Stock = require('../models/Stock');
const Home = require('../models/Home-Admin');

//show stock
exports.showStocks = async (req,res) =>{
    const {id} = req.params;
    const home = await Home.findOne({id})
    await   Stock.find().then(function(stocks){
            res.render("report",{ 
                stockList:stocks,
                home });
     })
     
};