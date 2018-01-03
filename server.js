const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`<h2>hello earf</h2>`);
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require('socket.io').listen(server)

io.sockets.on('connection', (socket) => {
  console.log('connected: %s', socket.id)
})