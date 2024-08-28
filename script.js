const ws = new WebSocket('wss://ideal-computing-machine-4jg5pvrj9wjw27764-5050.app.github.dev/');

const log = (message) => {
  const log_e = document.querySelector('.log');
  log_e.innerText += `\n${message}`;
}

const send = (data) => {
  ws.send(JSON.stringify(data));
  log(`Sent: ${JSON.stringify(data)}`);
}

ws.onopen = (event) => {
  send({type: "handshake_start"})
};

ws.onmessage = (event) => {
  console.log('received: %s', event.data);

  log(`Recived: ${event.data}`);
};

document.addEventListener("keydown", (event) => {
  if(event.key == "Enter") {
    let input_box = document.querySelector(".message_box");
    let value = input_box.value;

    input_box.value = "";
    send({type: "message", message: value})
  }
})