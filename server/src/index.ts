import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import colors from 'colors';
import cors from 'cors';
// ------ / 
import dotenv from 'dotenv';
dotenv.config()


import { mongooseConnection } from './mongoosConnect/mongoosConnect';
import router from './routes';



const app = express();
const port = process.env.PORT || 5000;


// middleware -- 
app.use(cors({
    credentials: true,
}));
app.use(express.json())
app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app);


try {
    mongooseConnection();
} catch (error) {
    console.log("error on mongoose connection catch block")
}






server.listen(port, () => {
    console.log(colors.bgCyan(`listening on ${port}`))
});


app.use("/", router());