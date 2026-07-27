const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const defaultImage = "https://plus.unsplash.com/premium_photo-1682310096066-20c267e20605?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const postingSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    location : String,
    country : String,
    image: {
        type:[
            {
                url: String,
                filename: String,
            },
        ],
        default:[
            {
                url: defaultImage,
                filename: "default-image",
            },
        ],
    },
    owner: {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    geometry:{
        type:{
            type : String,
            enum : ["Point"],
            required : true,
        },
        coordinates:{
            type: [Number],
            required:true,
        },
    },
});

const Posting = mongoose.model("Posting" , postingSchema);

module.exports = Posting;