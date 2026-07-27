const User = require("../models/user.js");

module.exports.signUpreq = (req , res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req , res , next) => {
    try{
        let {username , email , password} = req.body;
        const newUser = new User({username , email});
        let registerd = await User.register(newUser , password);
        req.login(registerd , (err) => {
            if(err){
                return next(err);
            }
            req.flash("success" , "User registered succefully");
            res.redirect("/postings");
        });
    }
    catch(er){
        req.flash("error" , er.message);
        res.redirect("/signup");
    }
};

module.exports.loginReq = (req , res) => {
    res.render("users/login.ejs");
};

module.exports.updateLogin = (req , res) => {
    req.flash("success" , "Login successful!");
    let redirectUrl = res.locals.redirectUrl || "/postings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req , res , next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success" , "user logged out successfully");
        res.redirect("/postings");
    })
};