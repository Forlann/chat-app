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

  socket.on("chat message", (messageObject: { content: string }) => {
    // Envia a mensagem de volta apenas para o destinatário correto
    const senderUsername = users[socket.id];
    console.log(`Mensagem recebida: ${senderUsername}`, messageObject);

    if (senderUsername) {
      socket.broadcast.emit("chat message", {
        content: messageObject.content,
        sender: senderUsername,
      });
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor Socket.IO rodando na porta ${port}`);
});

// Configuração do banco de dados
import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'ch26k2e882sp.sa-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'D44afoO3wlgKZvNoF490',
  database: 'serverchatrds',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Endpoint para criar usuário na tabela de Usuários
app.post('/database/create-user', (req, res) => {
  const { username, email, password } = req.body;

  const query = 'INSERT INTO Usuarios (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error inserting data');
    }
    res.status(200).send('Data inserted successfully');
  });
});


app.post('/database/send-message', (req, res) => {
  const { user_sender_id, user_receiver_id, message } = req.body;

  const query = 'INSERT INTO Historico_de_Conversa (user_sender_id, user_receiver_id, message) VALUES (?, ?, ?)';
  db.query(query, [user_sender_id, user_receiver_id, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error inserting data');
    }
    res.status(200).send('Data inserted successfully');
  });
});
