import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const port = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server)

io.on("connection", socket => {
    console.log(socket.id)
})

server.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})
