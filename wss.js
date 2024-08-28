let ws = require("ws");

const send = (ws, data) => {
  ws.send(JSON.stringify(data));
  console.log(`Sent: ${JSON.stringify(data)}`);
}

const wss = new ws.WebSocketServer({ port: 5050 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(msg) {
    const data = JSON.parse(msg);

    switch (data.type) {
      case "handshake_start":
        send(ws, {type: "handshake_end"});
        break
      case "message":
        console.log('Recived Message: %s', data.message);
        break
      default:
          console.log('Received: %s', data);
        break
    }
  });
});