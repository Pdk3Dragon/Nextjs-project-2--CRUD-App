import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("connected to MongoDBMongodb Connected successfully with server : ${data.connection.host}");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;