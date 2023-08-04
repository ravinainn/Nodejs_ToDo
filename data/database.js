import mongoose from "mongoose";

export const connectDB = () => {

    mongoose
        .connect(process.env.MONGO_URL,{
            dbName: "BackendAPI",
        })
        .then((c) => console.log(`database connected with ${c.connection.host}`))
        .catch((e)=> console.log(e));
}

 