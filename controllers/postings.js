const express = require("express");
const Posting = require("../models/posting.js");
const flash = require("connect-flash");
express().use(flash());
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req , res) => {
    const allPostings = await Posting.find({});
    res.render("postings/index.ejs" , {allPostings});
};

module.exports.newForm = (req , res) => {
    res.render("postings/new.ejs");
};

module.exports.showPosting = async (req , res) => {
    const {id} = req.params;
    const posting = await Posting.findById(id).populate("owner");
    if(!posting){
        req.flash("error" , "Post dosen't exist");
        return res.redirect("/postings");
    }
    res.render("postings/show.ejs" , {posting});
};

module.exports.createPosting = async(req , res , next) => {
    let response = await geocodingClient.forwardGeocode({
    query: req.body.posting.location,
    limit: 1
    })
    .send()

    let url = req.file.path;
    let filename = req.file.filename;
    let posting = new Posting(req.body.posting);
    posting.owner = req.user._id;
    posting.image = {url , filename};
    posting.geometry = response.body.features[0].geometry;
    let saved = await posting.save();
    console.log(saved);
    req.flash("success" , "New add posted");
    res.redirect("/postings");
};

module.exports.editPosting = async (req , res) => {
    let {id} = req.params;
    const posting = await Posting.findById(id);
    if(!posting){
        req.flash("error" , "Post dosen't exist");
        return res.redirect("/postings");
    }
    res.render("postings/edit.ejs" , {posting});
};

module.exports.updatePosting = async (req , res) => {
    let {id} = req.params;
    let posting = await Posting.findByIdAndUpdate(id , {...req.body.posting});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        posting.image = {url , filename};
        await posting.save();
    }
    req.flash("success" , "post updated successfully");
    res.redirect("/postings")
};

module.exports.deletePosting = async (req , res) => {
    let {id} = req.params;
    let deleted = await Posting.findByIdAndDelete(id);
    req.flash("success" , "post deleted successfully");
    res.redirect("/postings");
};