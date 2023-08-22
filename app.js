import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";



export const app = express();

config({
    path:"./data/config.env",
})

app.use(express.json());

app.use(cookieParser());
// app.use(cors({
//     origin:[process.env.FRONTEND_URL],
//     methods: ["GET","POST","PUT","DELETE"],
//     credentials: true,
// }))
const allowedOrigins = ['http://localhost:5173']; // Add your frontend URL here
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials (cookies, authorization headers)
};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/users" ,userRouter);
app.use("/api/v1/task" ,taskRouter);


app.get("/",(req,res)=> {
    res.send("Nice Working ")
})


app.use(errorMiddleware);




