if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbUrl = process.env.ATLASDB_URL;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const {MongoStore} = require('connect-mongo');
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const postingRouter = require("./routes/posting.js");
const userRouter = require("./routes/user.js");

const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto: {
        secret : process.env.SECRET,
    },
    touchAfter : 24*3600,
});

store.on("error" , () => {
    console.log("Error in mongo session store" , err);
});

const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie: {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
    }
};

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "/public")));
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main().then(() => {
    console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

app.get("/demouser" , async (req , res) => {
    let fakeuser = new User({
        email : "mananexit@gmail.com",
        username : "mananexit",
    });
    let registerd = await User.register(fakeuser , "abcde");
    res.send(registerd);
});

app.use((req , res , next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.use("/postings" , postingRouter);
app.use("/" , userRouter);

app.all("/*splat" , (req , res , next) => {
    next(new ExpressError(404 , "Page not found!"));
});

app.use((err , req , res , next) => {
    let{statusCode = 500 , message = "something went wrong!"} = err;
    res.status(statusCode).render("error.ejs" , {message});
    // res.status(statusCode).send(message);
});

app.listen(1010 , () => {
    console.log("server listening");
});