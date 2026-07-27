const mongoose = require("mongoose");
const initData = require("./data.js");
const Posting = require("../models/posting.js");
const MONGO_URL = 'mongodb://127.0.0.1:27017/dealit';

main().then(() => {
    console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Posting.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner : "6a58cbd5b59487de4ecf55a8"}));
    await Posting.insertMany(initData.data);
    console.log("DB initilaized");
};

initDB();

