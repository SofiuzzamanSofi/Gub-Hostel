import express from 'express';
import cors from 'cors';
import http from 'http';
import colors from 'colors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoose from 'mongoose';

import dotenv from 'dotenv'
dotenv.config();

// const userRouter = require('./routes/main')
import mainRoute from './routes/main'
import exampleRoute from './routes/example'
import signUpRoute from './routes/auth/signup'




const app = express();
const port = process.env.PORT || 8000;
const { MONGODB_URL } = process.env;


// middleware --- 
app.use(cors({
    credentials: true,
}));
app.use(express.json())

// app.use(cookieParser())
// app.use(compression())
// app.use(bodyParser.json())




const server = http.createServer(app);

server.listen(port, function () {
    console.log(colors.bgCyan(`server listening on port: ${port}`));
})



mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL)





// console.log("hello TypeScript 2");
// console.log("MONGODB_URL:", MONGODB_URL)

// app.get("/", (req, res) => {
//     res.send({
//         success: true,
//         title: "Bismillahi Rahmanir Rahim, Successfull Running machineries server",
//     });
// });



// define all routes -- 
app.use("/", mainRoute);
app.use("/example", exampleRoute);
app.use("/auth/signup", signUpRoute);
