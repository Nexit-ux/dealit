const Posting = require("./models/posting");
const ExpressError = require("./utils/ExpressError.js");
const {postingSchema} = require("./schema.js");

module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error" , "You must logged int first");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveUrl = (req , res , next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req , res , next) => {
    let {id} = req.params;
    let posting = await Posting.findById(id);
    if(!posting.owner.equals(res.locals.currUser._id)){
        req.flash("error" , "You are not Authorized");
        return res.redirect(`/postings`);
    }
    next();
}

module.exports.validatePosting = (req , res , next) => {
    if(!req.body.posting.image?.[0]?.url) {
        delete req.body.posting.image;
    }
    let {error} = postingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400 , errMsg);
    }
    else{
        next();
    }
}