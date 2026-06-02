const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.use('/runs', express.static('runs'));

const LOG_FILE = path.join(__dirname, 'agent-execution.log');

// Watch log file and stream to UI
fs.watch(LOG_FILE, (event) => {
    if (event === 'change') {
        const content = fs.readFileSync(LOG_FILE, 'utf8');
        const lines = content.split('\n').filter(l => l.trim());
        const lastLine = lines[lines.length - 1];
        io.emit('log', lastLine);
    }
});

io.on('connection', (socket) => {
    console.log('User connected to Dashboard');
    // Send existing logs
    if (fs.existsSync(LOG_FILE)) {
        const content = fs.readFileSync(LOG_FILE, 'utf8');
        socket.emit('init_logs', content.split('\n'));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Dashboard live at http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`⚠️ Port ${PORT} is busy. Trying ${parseInt(PORT) + 1}...`);
        server.listen(parseInt(PORT) + 1);
    } else {
        console.error(err);
    }
});
