module.exports = (req,res) => {

    let firstname= ""
    let lastname = ""
    let nickname = ""
    let phonenum = ""
    let username = ""
    let password = ""
    let data = req.flash('data')[0]

    if (typeof data != "undefined") { 
        firstname= data.firstname
        lastname = data.lastname
        nickname = data.nickname
        phonenum = data.phonenum
        username = data.username
        password = data.password
    }

    res.render('register', {
        errors: req.flash('validationErrors'),
        firstname: firstname,
        lastname: lastname,
        nickname: nickname,
        phonenum: phonenum,
        username: username,
        password: password
    })

}

