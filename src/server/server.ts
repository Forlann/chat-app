import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const port = 8080;

// Armazena os IDs de socket associados aos usuários
const users: { [key: string]: string } = {};

io.on("connection", (socket: Socket) => {
  console.log("Um cliente se conectou");

  socket.on("disconnect", () => {
    console.log("Um cliente se desconectou");

    // Remove o usuário desconectado da lista
    if (users[socket.id]) {
      delete users[socket.id];
    }
  });

  socket.on("set username", (username: string) => {
    console.log("Username definido:", username);

    // Associa o ID do socket com o nome de usuário
    users[socket.id] = username;
  });

  socket.on("chat message", (messageObject: { content: string }, room) => {

    // Envia a mensagem de volta apenas para o destinatário correto
    const senderUsername = users[socket.id];
    console.log(`Mensagem recebida: ${senderUsername}`, messageObject);

    if (room === ''){
      socket.broadcast.emit("chat message", {
        content: messageObject.content,
        sender: senderUsername,
      });
    } else {
      socket.to(room).emit("chat message", {
        content: messageObject.content,
        sender: senderUsername,
      },);
    }
  });

  socket.on("join-room", (room:string) => {
    socket.join(room)
    console.log(`Usuário ${socket.id} entrou na sala ${room}`)
  });

});

server.listen(port, () => {
  console.log(`Servidor Socket.IO rodando na porta ${port}`);
});
