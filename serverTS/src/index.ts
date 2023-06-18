import express from 'express';
import cors from 'cors';
import http from 'http';
import colors from 'colors';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
    credentials: true,
}))

const server = http.createServer(app);

server.listen(port, function () {
    console.log(colors.bgCyan(`server listening on port: ${port}`));
})

console.log("hello TypeScript 2");

app.get("/", (req, res) => {
    res.send({
        success: true,
        title: "Bismillahi Rahmanir Rahim, Successfull Running machineries server",
    });
});
