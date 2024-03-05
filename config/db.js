import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.Mongo_URL);
        console.log(`Connected to mongoDb ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
};

export default connectDB;