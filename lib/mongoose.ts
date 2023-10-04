import mongoose from 'mongoose';

let isConnected = false; //variable to check if mongoose os connected

export const connectToDB = async () => {

  mongoose.set('strictQuery', true); // prevent from unknown queries

  if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL");

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try{
    await mongoose.connect(
        process.env.MONGODB_URL
      
      );
    isConnected = true;
    console.log("MongoDB connected");
  }catch(error)
  {
      console.log(error);
  }
}
// Connecting to MongoDB