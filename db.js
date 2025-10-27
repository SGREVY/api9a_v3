import mongoose, { Mongoose } from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/terceroa"
export const conectDB = async () => {
  try{
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Succesfully!!!!");
  }
  catch (error){
    console.error("Mongo DB Connection Filed")
     console.error(error.message);
  }
}