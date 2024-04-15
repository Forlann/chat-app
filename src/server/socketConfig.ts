import io from 'socket.io-client';

const socket = io('http://localhost:8080', {
    withCredentials: true, // Permitir credenciais (cookies, tokens, etc.), se necessário
    extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:8080' // Permitir todas as origens, ajuste conforme necessário
    }
}); // Conectar ao servidor Socket.IO

export default socket;
