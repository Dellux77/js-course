const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let players = {};

wss.on('connection', function connection(ws) {
  const id = generateId();
  players[id] = { x: 0, y: 0 };
  
  ws.on('message', function incoming(message) {
    const data = JSON.parse(message);
    if(data.type === 'move') {
        players[id].x += data.dx;
        players[id].y += data.dy;
        // Broadcast new state to ALL clients immediately
        broadcast({ type: 'update', players });
    }
  });

  ws.on('close', () => delete players[id]);
});

