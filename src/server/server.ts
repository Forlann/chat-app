import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Permitir todas as origens, ajuste conforme necessário
    methods: ['GET', 'POST'],
    credentials: true
  }
});
const port = 8080


io.on('connection', (socket: Socket) => {
  console.log('Um cliente se conectou');

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou');
  });

  // Lógica para lidar com eventos do Socket.IO
  socket.on('chat message', (msg: string) => {
    console.log('Mensagem recebida:', msg);
    io.emit('chat message', msg); // Enviar a mensagem de volta para todos os clientes conectados
  });
});

server.listen(port, () => {
  console.log(`Servidor Socket.IO rodando na porta ${port}`);
});
