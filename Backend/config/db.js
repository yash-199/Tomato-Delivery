import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://byash0720:Yashbhardwaj123@cluster0.0ffbl.mongodb.net/food-del')
        .then(() => console.log("DB Connected"));
}