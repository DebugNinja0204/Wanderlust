const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("Connected to MONGODB");
})
.catch((err) =>{
        console.log(err);
    })
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async() =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({
        ...obj,
        owner : '69beb2ed5d716542d1095339',
        geometry: { type: 'Point', coordinates: [-122.33207, 47.60621] } // Adding default geometry
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was Initialized");

};

initDB();