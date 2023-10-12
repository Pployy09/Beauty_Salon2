const Home = require('../models/Home-Admin');

exports.showData = async (req, res, next) => {
    const { id } = req.params;
    try {
        const home = await Home.findOne({ id });
        const HomeData = await Home.find();
        res.render("register", {
            HomeData: HomeData,
            home
        });
    } catch (error) {
        next(error);
    }
};
