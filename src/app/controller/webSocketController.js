const defaultChannel = [
  {
    type: 0,
    name: "DEFAULT",
  },
];
module.exports = socket => {
  const operador = {
    socketId: socket.id,
    codOperador: socket.handshake.headers["x-operator-id"]
      ? socket.handshake.headers["x-operator-id"]
      : undefined,
    name: socket.handshake.headers["x-operator-name"]
      ? socket.handshake.headers["x-operator-name"]
      : undefined,
  };

  if (operador.codOperador !== undefined) {
    console.log("Operador conectado:", JSON.stringify(operador));
  } else {
    // quando não é passado nenhuma identificação apra o socket
    console.log("Socket connectado", JSON.stringify(operador));
  }

  const headers = socket.handshake.headers;
  const channels =
    headers["x-operator-channels"] !== undefined
      ? JSON.parse(headers["x-operator-channels"])
      : defaultChannel;

  if (channels.length !== undefined) {
    channels.forEach(channel => {
      socket.join(channel.name, () => {
        // quando for operador da um foreach nas salas e cria dinamicamente
        // socket.broadcast.to(id).emit('my message', msg);
        const rooms = Object.keys(socket.rooms);
        console.log(rooms);
        socket.on(channel.name, data => {
          messages.push(data);
          socket.broadcast.emit(channel.name, data);
        });
      });
    });
  } else {
    socket.join(channels.name, () => {
      socketEmit(socket, channels.name).then(msg => {
        messages.push(msg);
      });
    });
  }

  const messages = [];
};

function socketEmit(socket, name, data) {
  return new Promise(callback => {
    socket.on(name, data => {
      socket.broadcast.emit(name, data);

      callback(data);
    });
  });
}
